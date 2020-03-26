import React, {createContext, useReducer} from 'react';
import './stylesheets/App.scss';
import GameContainer from './containers/GameContainer'

export const ChapContext = createContext()
const initialState = {chapter: 0, line: 0}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case "increaseChap":
      return {...state, chapter: state.chapter + 1}
    case "decreaseChap":
      return {...state, chapter: state.chapter - 1}
    case "increaseLine":
      return {...state, chapter: state.line + 1}
    case "decreaseLine":
      return {...state, chapter: state.line - 1}
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ChapContext.Provider value={[state, dispatch]}>
      <GameContainer/>
    </ChapContext.Provider>
  );
}

export default App;
