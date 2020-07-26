import React, {useState, useContext} from 'react';
import Modal from './Modal'
import {ChapContext} from '../containers/AppContainer';
import { chapterTitles } from '../scripts/tableOfContents';
import {skipChapter} from '../actions';

export default function SkipModal({toggleSkipModal}){
  const {dispatch} = useContext(ChapContext);
  const [savedIndex, changeSavedIndex] = useState(null);

  const handleSubmit = () => {
    if(savedIndex !== null){
      toggleSkipModal(false)
      dispatch(skipChapter(savedIndex))
    }
  }

  const modalBody = (
    <div>
      <h2>Select a scene to skip forward:</h2>
      <ul className="scene-list">
        {chapterTitles.map((title, index) => 
          <li key={index} onClick={() => changeSavedIndex(index)} className={savedIndex === index ? "clicked" : null}>
            Scene {index + 1}: {title}
          </li>
        )}
      </ul>
    </div>
  )

  return (
    <Modal body={modalBody} toggleOpen={toggleSkipModal} handleSubmit={handleSubmit} />
  )
}