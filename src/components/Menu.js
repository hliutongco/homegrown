import React, {useState, useContext} from 'react';
import MusicPlayer from './MusicPlayer'
import Modal from './Modal'
import {MenuContext} from '../App';
import '../stylesheets/Menu.scss'

const exitBody = (
  <h2>Are you sure you want to exit the game?</h2>
)

export default function Menu(){
  let [openMenu, toggleMenu] = useState(false)
  let [showInstructions, toggleInstructions] = useState(true)
  let [showExitModal, toggleExitModal] = useState(false)
  let [showSkipModal, toggleSkipModal] = useState(false)
  let toggleDisplay = useContext(MenuContext)

  const handleClick = () => {
    if(showInstructions) toggleInstructions(false);
    toggleMenu(!openMenu)
  }

  return (
    <>
      <div className={openMenu ? "" : "hidden"}>
        <div id="music-box">
          <MusicPlayer/>
        </div>
        <div id="controls">
          <span>Controls</span>
          <p>
            Next — Right Arrow / Click<br/>
            Previous — Left Arrow <br/>
            Quick Complete — Down Arrow
          </p>
        </div> 
      </div>
      <div id="menu-container">
        <div id="menu-instructions" className={showInstructions ? "blinking" : "hidden"}>click to expand/collapse menu</div>
        <div id="menu">
          <button className={openMenu ? "" : "hidden"}>Skip</button>
          <span className="divider"></span>
          <button onClick={handleClick} className={openMenu ? "clicked" : ""}>Menu</button>
          <span className="divider"></span>
          <button onClick={() => toggleExitModal(true)} className={openMenu ? "" : "hidden"}>Exit</button>
        </div>
      </div>
      {showExitModal ? <Modal body={exitBody} toggleOpen={toggleExitModal} handleSubmit={() => toggleDisplay(false)} /> : ""}
      {showSkipModal ? <Modal toggleOpen={toggleSkipModal} /> : ""}
    </>
  )
}