import React, {useContext} from 'react';
import {GameDisplayContext} from '../App';

export default function Ending() {
  let toggleGameDisplay = useContext(GameDisplayContext)

  return (
    <div>
      Test
      <p onClick={() => toggleGameDisplay(false)}>Click here</p>
    </div>
  )
}