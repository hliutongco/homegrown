import React, {useContext} from 'react';
import UpperContainer from './UpperContainer'
import Script from '../components/Script';
import {tableOfContents} from '../scripts/tableOfContents';
import {ChapContext} from './AppContainer';
import '../stylesheets/GameContainer.scss';
import {increaseLine} from '../actions';
import {chapterTitles} from '../scripts/tableOfContents';

export default function GameContainer() {
  const {state, dispatch} = useContext(ChapContext);
  const scriptObj = tableOfContents[state.chapter][state.line]
  const chapterTitle = chapterTitles[state.chapter]
  
  const handleClick = () => {    
    dispatch(increaseLine)
  }
  
  return (
    <div id="game-container" onClick={handleClick}>
      <p>Scene {state.chapter + 1}: {chapterTitle} <img src="/music-bars.gif" alt="music bars"/></p>
      <UpperContainer id={`${state.chapter}${state.line}`} scriptObj={scriptObj}/>
      <Script id={`${state.chapter}${state.line}`} text={scriptObj.text} transition={scriptObj.transition} keycode={state.keycode}/>
    </div>
  )
}
