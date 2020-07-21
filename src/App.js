import React, {useState, createContext} from 'react';
import './stylesheets/App.scss';
import AppContainer from './containers/AppContainer';
export const MenuContext = createContext()

function App() {
  let [displayGame, toggleDisplay] = useState(false)
  
  const menu = (
    <div className="app">
      <h1>Homegrown</h1>
      <p>an audio/visual tale of (in)organic people</p>
      <button onClick={() => toggleDisplay(true)}>Start</button>
    </div>
  )
  return (
    <>
      {
        displayGame 
        ? 
        <MenuContext.Provider value={toggleDisplay}>
          <AppContainer/>
        </MenuContext.Provider>
        : 
        menu
      }
    </>
  );
}

export default App;
