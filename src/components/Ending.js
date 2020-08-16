import React, {useContext, useState, useEffect} from 'react';
import {GameDisplayContext} from '../App';
import { storage } from '../firebaseConfig'
import '../stylesheets/Ending.scss';

export default function Ending() {
  let toggleGameDisplay = useContext(GameDisplayContext);
  let [imageURLs, addURLs] = useState([]);
  
  useEffect(() => {
    const getImageURLs = async () => {
      const getURL = (fileName) => storage.ref( `/images/${fileName}` ).getDownloadURL()
      const urls = await Promise.all([
        getURL("small-town.jpg"), 
        getURL("community-center.jpeg"),
        getURL("apartment.jpg"),
        getURL("carnival.jpg"),
        getURL("stars.jpg")
      ])
      addURLs(urls);
    }
    getImageURLs();
  }, [])

  return (
    <div className="ending-container">
      <div className="ending">
        <h2>Thank you for reading!</h2>
        <p>
          Thank you to <a href="https://mixkit.co/" target="_blank" rel="noopener noreferrer">mixkit.co</a> for the music and to <a href="https://www.fiverr.com/ezemenendez" target="_blank" rel="noopener noreferrer">ezemenendez</a> for the lovely artwork.
        </p>
        <div>
          {
            imageURLs.map((imageURL, index) => {
              return (
                <a key={index} href={imageURL} target="_blank" rel="noopener noreferrer">
                  <img src={imageURL} alt="ezemenendez artwork"/>
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