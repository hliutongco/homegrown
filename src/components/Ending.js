import React, {useContext} from 'react';
import {GameDisplayContext} from '../App';
import '../stylesheets/Ending.scss';

export default function Ending() {
  let {toggleGameDisplay, imageObjs} = useContext(GameDisplayContext);

  return (
    <div className="ending-container">
      <div className="ending">
        <h2>Thank you for reading!</h2>
        <p>
          Thank you to <a href="https://mixkit.co/" target="_blank" rel="noopener noreferrer">mixkit.co</a> for the music and to <a href="https://www.fiverr.com/ezemenendez" target="_blank" rel="noopener noreferrer">ezemenendez</a> for the lovely artwork.
        </p>
        <div>
          {
            imageObjs.map((imageObj, index) => {
              return (
                <a key={index} href={imageObj.url} target="_blank" rel="noopener noreferrer">
                  <img src={imageObj.url} alt={imageObj.name}/>
                </a>
              )
            })
          }
        </div>
        <button onClick={() => toggleGameDisplay(false)}>Main Menu</button>
      </div>
    </div>
  )
}