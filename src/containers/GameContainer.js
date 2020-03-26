import React, {useState, useContext} from 'react';
import Script from '../components/Script';
import {jackTableOfContents} from '../scripts/tableOfContents';
import {ChapContext} from '../App';
import '../stylesheets/GameContainer.scss';

export default function GameContainer() {
  const [state, dispatch] = useContext(ChapContext);
  const [lineCounter, changeLine] = useState(0)
  const [chapCounter, changeChap] = useState(1)
  const chapLength = jackTableOfContents[chapCounter].length

  const handleClick = () => {
    changeLine(lineCounter + 1)
    if(lineCounter > chapLength){
      changeChap(chapCounter + 1)
      changeLine(0)
    }
  }

  return (
    <div id="game-container" onClick={handleClick}>
      <Script textObj={jackTableOfContents[chapCounter][lineCounter]}/>
    </div>
  )
}
