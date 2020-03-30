import React, {useContext} from 'react';
import UpperContainer from './UpperContainer'
import Script from '../components/Script';
import {jackTableOfContents} from '../scripts/tableOfContents';
import {ChapContext} from '../App';
import '../stylesheets/GameContainer.scss';
import {increaseLine} from '../actions';
import {jackChapterTitles} from '../scripts/tableOfContents';

export default function GameContainer() {
  const [state, dispatch] = useContext(ChapContext);
  const scriptObj = jackTableOfContents[state.chapter][state.line]
  const chapterTitle = jackChapterTitles[state.chapter]
  
  const handleClick = () => {    
    dispatch(increaseLine)
  }

  return (
    <div id="game-container" onClick={handleClick}>
      <p>Chapter {state.chapter + 1}: {chapterTitle} <img src="/music-bars.gif" alt="music bars"/></p>
      <UpperContainer id={`${state.chapter}${state.line}`} scriptObj={scriptObj}/>
      <Script id={`${state.chapter}${state.line}`} text={scriptObj.text}/>
    </div>
  )
}
