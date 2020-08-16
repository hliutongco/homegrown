import React, {createContext, useEffect, useReducer} from 'react';
import GameContainer from './GameContainer';
import Menu from '../components/Menu';
import Ending from '../components/Ending';
import EndingTransition from '../components/EndingTransition';
import {tableOfContents} from '../scripts/tableOfContents';
import {increaseLine, decreaseLine, completeLine} from '../actions';
import { useSwipeable } from 'react-swipeable';

export const ChapContext = createContext()
const initialState = {chapter: 0, line: 0, keycode: null, ending: false, transitionEnding: null}

const increaseLineHandler = (state) => {
  const chapLength = tableOfContents[state.chapter].length
  const newObj = {...state, keycode: "ArrowRight"}
  const newChapObj = {...newObj, chapter: state.chapter + 1, line: 0}
  const endingObj = {...state, transitionEnding: "ending"}
  const changeChap = state.chapter + 1 < tableOfContents.length ? newChapObj : endingObj
  const changeLine = {...newObj, line: state.line + 1}

  return state.line === chapLength - 1 ? changeChap : changeLine
}

const decreaseLineHandler = (state) => {
  if(!state.line && !state.chapter) return state

  const newObj = {...state, keycode: "ArrowLeft"}

  if(!state.line && state.chapter) {
    const prevChap = state.chapter - 1
    const lastLine = tableOfContents[prevChap].length - 1
    return {...newObj, chapter: prevChap, line: lastLine}
  }
  else {
    return {...newObj, line: state.line - 1}
  }
}

const reducer = (state, action) => {
  switch(action.type){
    case "increaseLine":
      return increaseLineHandler(state);
    case "decreaseLine":
      return decreaseLineHandler(state)
    case "completeLine":
      return {...state,  keycode: "ArrowDown"}
    case "skipChapter":
      const newObj = {chapter: action.data, line: 0, keycode: "ArrowRight"}
      return {...state, ...newObj}
    case "ending":
      return {...state, ending: true}
    case "transitionEnding":
      return {...state, transitionEnding: "quitGame"}
    case "clearTransitionEnding":
      return {...state, transitionEnding: null}
    default:
      return state;
  }
}

const handleKeypress = (code, dispatch) => {

  if(code === "ArrowRight"){
    dispatch(increaseLine)
  }
  else if(code === "ArrowLeft"){
    dispatch(decreaseLine)
  }
  else if (code === "ArrowDown"){
    dispatch(completeLine)
  }
}

export default function AppContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handlers = useSwipeable({ 
    onSwipedLeft: () => dispatch(increaseLine), 
    onSwipedRight: () => dispatch(decreaseLine),
    onSwipedDown: () => dispatch(completeLine)
  })
  
  useEffect(() => {
    document.addEventListener('keyup', (event) => handleKeypress(event.code, dispatch))
  }, []);

  return (
    <ChapContext.Provider value={{state: state, dispatch: dispatch}}>
      {
        state.ending ?
          <Ending/>
        :
          <div {...handlers}>
            <GameContainer/>
            <Menu/>
            <EndingTransition/>
          </div>
      }
    </ChapContext.Provider>
  );
}
