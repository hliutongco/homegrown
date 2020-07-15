import React, {useState} from 'react';
import '../stylesheets/Menu.scss'

export default function Menu(){
  let [counter, changeCounter] = useState(0)
  let [intervalID, saveID] = useState(null)
  let [menuState, changeMenuState] = useState("closed")

  const handleClick = () => {
    if(intervalID) return;   
    const interval = setInterval(() => {
      if(menuState === "closed"){
        changeCounter(counter++)
        if(counter === 3){
          saveID(null)
          changeMenuState("opened")
          clearInterval(interval)
        }
      }
      else if(menuState === "opened"){
        changeCounter(counter--)
        if(counter === -1){
          saveID(null)
          changeMenuState("closed") 
          clearInterval(interval)
        }
      }
    }, 50);
    saveID(interval);
  }

  const handleClassChange = (num) => {
    return counter && counter >= num ? "" : "hidden"
  }

  return (
    <div id="menu">
      <button className={handleClassChange(1)}>Skip</button>
      <button onClick={handleClick} className={menuState === "opened" ? "clicked" : ""}>Menu</button>
      <button className={handleClassChange(1)}>Exit</button>
    </div>
  )
}