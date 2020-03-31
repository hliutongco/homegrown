import React, {createContext, useEffect, useReducer} from 'react';
import './stylesheets/App.scss';
import GameContainer from './containers/GameContainer';
import Menu from './components/Menu';
import {jackTableOfContents} from './scripts/tableOfContents';
import {increaseLine, decreaseLine, completeLine} from './actions';

export const ChapContext = createContext()
const initialState = {chapter: 0, line: 0, keycode: null}

const increaseLineHandler = (state) => {
  if(state.chapter === jackTableOfContents.length - 1) return state

  const chapLength = jackTableOfContents[state.chapter].length
  const newObj = {...state, keycode: "ArrowRight"}
  const changeChap = {...newObj, chapter: state.chapter + 1, line: 0}
  const changeLine = {...newObj, line: state.line + 1}
  return state.line === chapLength - 1 ? changeChap : changeLine
}

const decreaseLineHandler = (state) => {
  if(!state.line && !state.chapter) return state

  const newObj = {...state, keycode: "ArrowLeft"}

  if(!state.line && state.chapter) {
    const prevChap = state.chapter - 1
    const lastLine = jackTableOfContents[prevChap].length - 1
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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    document.addEventListener('keyup', (event) => handleKeypress(event.code, dispatch))
  }, []);

  return (
    <ChapContext.Provider value={[state, dispatch]}>
      <GameContainer/>
      <Menu/>
    </ChapContext.Provider>
  );
}

export default App;
