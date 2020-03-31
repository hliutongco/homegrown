import React, {useState} from 'react';
import '../stylesheets/Menu.scss'

export default function Menu(){
  const [clicked, toggleClick] = useState(false)
  const handleClick = () => {
    toggleClick(!clicked)
  }
  const showButton = !clicked ? "hidden" : ""
  return (
    <div id="menu">
      <button onClick={handleClick} className={clicked ? "clicked" : ""}>Menu</button>
      <button className={showButton}>Save</button>
      <button className={showButton}>Load</button>
      <button className={showButton}>Chapters</button>
      <button className={showButton}>Exit</button>
    </div>
  )
}