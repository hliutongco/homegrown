import React, {useState} from 'react';
import MusicPlayer from './MusicPlayer'
import '../stylesheets/Menu.scss'

export default function Menu(){
  let [openMenu, toggleMenu] = useState(false)

  const handleClick = () => {
    toggleMenu(!openMenu)
  }

  return (
    <>
      <div className={openMenu ? "" : "hidden"}>
        <div id="music-box">
          <MusicPlayer/>
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