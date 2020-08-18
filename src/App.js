import React, {useState, useEffect, createContext} from 'react';
import { storage } from './firebaseConfig'
import './stylesheets/App.scss';
import AppContainer from './containers/AppContainer';
export const GameDisplayContext = createContext()

function App() {
  let [displayGame, toggleGameDisplay] = useState(false)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  let [imageObjs, addImageObjs] = useState([]);
  
  useEffect(() => {
      const imageObjs = []
      const getURL = (fileName) => storage.ref( `/images/${fileName}` ).getDownloadURL()
      const buildImageObj = async (fileName) => {
        const url = await getURL(fileName); 
        const img = new Image ();
        img.onload = () => imageObjs.push({name: fileName, url: url});
        img.src = url;
      }

      const fileNames = [
        "small-town.jpg",
        "community-center.jpg",
        "apartment.jpg",
        "carnival.jpg",
        "stars.jpg"
      ]
      
      fileNames.forEach(fileName => buildImageObj(fileName));
      addImageObjs(imageObjs);
  }, [])

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
      <button onClick={() => toggleGameDisplay(true)}>Start</button>
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
        <GameDisplayContext.Provider value={{toggleGameDisplay: toggleGameDisplay, imageObjs: imageObjs}}>
          <AppContainer/>
        </GameDisplayContext.Provider>
        : 
        menu
      }
    </div>
  );
}

export default App;
