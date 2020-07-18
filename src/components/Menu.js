import React, {useState} from 'react';
import '../stylesheets/Menu.scss'

export default function Menu(){
  let [openMenu, toggleMenu] = useState(false)
  let [pauseState, togglePause] = useState(false)

  const handleClick = () => {
    toggleMenu(!openMenu)
  }

  const handlePauseClick = () => {
    togglePause(!pauseState)
  }

  return (
    <>
      <div className={openMenu ? "" : "hidden"}>
        <div id="music-box">
          <div>
            <span id="music-controls" onClick={handlePauseClick} className={pauseState ? 'pause' : ''}>
              {pauseState ? `►` : `❚❚` }
            </span>
            <span>
              <h6>Fake Artist</h6>
              Fake Title
            </span>
          </div>
        </div>
        <div id="controls" className={openMenu ? "" : "hidden"}>
          <span>Controls</span>
          <p>
            Next — Right Arrow / Click<br/>
            Previous — Left Arrow <br/>
            Quick Complete — Down Arrow
          </p>
        </div> 
      </div>
      <div id="menu">
        <button className={openMenu ? "" : "hidden"}>Skip</button>
        <button onClick={handleClick} className={openMenu ? "clicked" : ""}>Menu</button>
        <button className={openMenu ? "" : "hidden"}>Exit</button>
      </div>
    </>
  )
}