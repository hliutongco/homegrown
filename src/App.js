import React, {useState, useEffect, createContext} from 'react';
import './stylesheets/App.scss';
import AppContainer from './containers/AppContainer';
export const MenuContext = createContext()

function App() {
  let [displayGame, toggleDisplay] = useState(false)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize) };
  }, [])

  const menu = (
    <div className="main-menu">
      <h1>Homegrown</h1>
      <p>an audio/visual tale of (in)organic people</p>
      <button onClick={() => toggleDisplay(true)}>Start</button>
    </div>
  )

  const windowSize = {
    width: dimensions.width, 
    height: dimensions.height
  }

  return (
    <div className="app" style={windowSize}>
      {
        displayGame 
        ? 
        <MenuContext.Provider value={toggleDisplay}>
          <AppContainer/>
        </MenuContext.Provider>
        : 
        menu
      }
    </div>
  );
}

export default App;
