import React, {useState, useRef, useContext, useEffect} from 'react';
import {ChapContext} from '../containers/AppContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const audioInfo = [
  {title: "Woodfire by the Lake", artist: "Alejandro Magaña", name: "01.mp3"},
  {title: "Stylz", artist: "Ahjay Stelino", name: "02.mp3"},
  {title: "Rebel Wayz", artist: "Arulo", name: "03.mp3"},
  {title: "New Bass", artist: "Lily J", name: "04.mp3"}
]

export default function MusicPlayer(){
  const {state} = useContext(ChapContext);
  let audioPlayer = useRef(null);
  let [pauseState, togglePause] = useState(false)
  let [audioIndex, changeAudioIndex] = useState(0)

  useEffect(() => {
    if(state.transitionEnding){
      const fadeMusic = () => {
        const fadeAudio = setInterval(() => {
          if (audioPlayer.current && audioPlayer.current.volume > 0.1) {
            audioPlayer.current.volume -= 0.1;
          }
          else {
            clearInterval(fadeAudio);
          }
        }, 100);
      }
      fadeMusic();
    }

  }, [state.transitionEnding])

  const handleAudioChange = (audioIndex) => {
    if(pauseState) return;

    if(audioIndex >= audioInfo.length){
      changeAudioIndex(0)
    } else if(audioIndex < 0) {
      changeAudioIndex(3)
    } else {
      changeAudioIndex(audioIndex)
    }
  }

  const handleTogglePause = () => {
    togglePause(!pauseState)
    pauseState ? audioPlayer.current.play() : audioPlayer.current.pause()
  }

  const currentSong = audioInfo[audioIndex];

  return (
    <div className="player-container">
      <div className="btn-container">
        <span onClick={() => handleAudioChange(audioIndex - 1)} className={pauseState ? 'disabled' : ''}>
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </span>
        <span id="music-controls" onClick={handleTogglePause} className={pauseState ? 'pause' : ''}>
          {pauseState ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} /> }
        </span>
        <span onClick={() => handleAudioChange(audioIndex + 1)} className={pauseState ? 'disabled' : ''}>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </span>
      </div>
      <span>
        <h6>{currentSong.title}</h6>
        <h6 className="artist">{currentSong.artist}</h6>
      </span>
      <audio
        ref={audioPlayer}
        src={currentSong.name}
        onEnded={() => handleAudioChange(audioIndex + 1)}
        hidden autoPlay preload="true"
      />
    </div>
  )
}