import React, {useState, useRef} from 'react';

export default function MusicPlayer(){
  let audioPlayer = useRef(null);
  let [pauseState, togglePause] = useState(false)
  let [audioIndex, changeAudioIndex] = useState(0)

  const handleAudioChange = (audioIndex) => {
    if(pauseState) return;

    if(audioIndex >= audioArray.length){
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

  const audioArray = [
    {title: "Woodfire by the Lake", artist: "Alejandro Magaña", mp3: "./01.mp3"},
    {title: "Stylz", artist: "Ahjay Stelino", mp3: "./02.mp3"},
    {title: "Rebel Wayz", artist: "Arulo", mp3: "./03.mp3"},
    {title: "New Bass", artist: "Lily J", mp3: "./04.mp3"}
  ]

  const currentSong = audioArray[audioIndex];

  return (
    <div>
      <span id="replay-btn" onClick={() => handleAudioChange(audioIndex - 1)} className={pauseState ? 'disabled' : ''}>
        ⇤
      </span>
      <span id="music-controls" onClick={handleTogglePause} className={pauseState ? 'pause' : ''}>
        {pauseState ? `►` : `❚❚` }
      </span>
      <span id="skip-btn" onClick={() => handleAudioChange(audioIndex + 1)} className={pauseState ? 'disabled' : ''}>
        ⇥
      </span>
      <span>
        <h6>{currentSong.title}</h6>
        {currentSong.artist}
      </span>
      <audio
        ref={audioPlayer}
        src={currentSong.mp3}
        onEnded={() => handleAudioChange(audioIndex + 1)}
        hidden autoPlay
      />
    </div>
  )
}