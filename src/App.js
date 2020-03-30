import React, {createContext, useEffect, useReducer} from 'react';
import './stylesheets/App.scss';
import GameContainer from './containers/GameContainer';
import {jackTableOfContents} from './scripts/tableOfContents';
import {increaseLine, decreaseLine} from './actions';

export const ChapContext = createContext()
const initialState = {chapter: 0, line: 0}

const increaseLineHandler = (state) => {
  const chapLength = jackTableOfContents[state.chapter].length
  const changeChap = {chapter: state.chapter + 1, line: 0}
  const changeLine = {...state, line: state.line + 1}
  if(state.chapter === jackTableOfContents.length - 1) return state
  return state.line === chapLength - 1 ? changeChap : changeLine
}

const decreaseLineHandler = (state) => {
  if(!state.line && !state.chapter){
    return state
  }
  else if(!state.line && state.chapter) {
    const prevChap = state.chapter - 1
    const lastLine = jackTableOfContents[prevChap].length - 1
    return {...state, chapter: prevChap, line: lastLine}
  }
  else {
    return {...state, line: state.line - 1}
  }
}

const reducer = (state, action) => {
  switch(action.type){
    case "increaseLine":
      return increaseLineHandler(state);
    case "decreaseLine":
      return decreaseLineHandler(state)
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
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    document.addEventListener('keyup', (event) => handleKeypress(event.code, dispatch))
  }, []);

  return (
    <ChapContext.Provider value={[state, dispatch]}>
      <GameContainer/>
    </ChapContext.Provider>
    
  );
}

export default App;
