import React, {useContext} from 'react';
import {GameDisplayContext} from '../App';
import '../stylesheets/Ending.scss';

const images = [
  "small-town.jpg",
  "community-center.jpg",
  "apartment.jpg",
  "carnival.jpg",
  "stars.jpg"
]

export default function Ending() {
  let toggleGameDisplay = useContext(GameDisplayContext);

  return (
    <div className="ending-container">
      <div className="ending">
        <h2>Thank you for reading!</h2>
        <p>
          Thank you to <a href="https://mixkit.co/" target="_blank" rel="noopener noreferrer">mixkit.co</a> for the music and to <a href="https://www.fiverr.com/ezemenendez" target="_blank" rel="noopener noreferrer">ezemenendez</a> for the lovely artwork.
        </p>
        <div>
          {
            images.map((image, index) => {
              return (
                <a key={index} href={image} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={image}/>
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