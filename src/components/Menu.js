import React, {useState, useContext} from 'react';
import MusicPlayer from './MusicPlayer'
import SkipModal from './SkipModal'
import Modal from './Modal'
import {GameDisplayContext} from '../App';
import '../stylesheets/Menu.scss'

const exitBody = (
  <h2>Are you sure you want to exit the game?</h2>
)

export default function Menu(){
  let [openMenu, toggleMenu] = useState(false)
  let [showInstructions, toggleInstructions] = useState(true)
  let [showExitModal, toggleExitModal] = useState(false)
  let [showSkipModal, toggleSkipModal] = useState(false)
  let {toggleGameDisplay} = useContext(GameDisplayContext)
  
  const controlsText = () => {
    if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
      return (
        <>
          Next — Left Swipe<br/>
          Previous — Right Swipe<br/>
          Quick Complete — Down Swipe
        </>
      )
    } else {
      return (
        <>
          Next — Right Arrow / Click<br/>
          Previous — Left Arrow <br/>
          Quick Complete — Down Arrow
        </>
      )
    }      
  }
  
  const handleClick = () => {
    if(showInstructions) toggleInstructions(false);
    toggleMenu(!openMenu)
  }

  return (
    <>
      <div id="menu-instructions" className={showInstructions ? "blinking" : "hidden"}>click above to expand/collapse menu</div>
      <div id="menu-container">
        <div id="menu">
          <button onClick={() => toggleSkipModal(true)} className={openMenu ? "start-top top-disappear" : "hidden start-bottom bottom-disappear"}>Skip</button>
          <span className="divider"></span>
          <button onClick={handleClick} className={openMenu ? "clicked start-top" : "unclicked start-bottom"}>Menu</button>
          <span className="divider"></span>
          <button onClick={() => toggleExitModal(true)} className={openMenu ? "start-top top-disappear" : "hidden start-bottom bottom-disappear"}>Exit</button>
        </div>
        <div className={openMenu ? "open-menu top-disappear" : "open-menu hidden bottom-disappear"}>
          <MusicPlayer/>
          <div id="controls">
            <span>Controls</span>
            <p>{controlsText()}</p>
          </div> 
        </div>
      </div>
      {showExitModal ? <Modal body={exitBody} toggleOpen={toggleExitModal} handleSubmit={() => toggleGameDisplay(false)} /> : null}
      {showSkipModal ? <SkipModal toggleSkipModal={toggleSkipModal} /> : null}
    </>
  )
}