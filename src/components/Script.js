import React, {useRef, useEffect, useState} from 'react';
import Typist from 'react-typist';

export default function Script({id, text = "", transition, keycode}) {
  const [showText, toggleTransition] = useState(true)

  const ref = useRef()

  useEffect(()  =>  {
    ref.current = text
  }, [text])

  useEffect(() => {
    if(transition && keycode === "ArrowRight"){
      toggleTransition(false)
      setTimeout(() => toggleTransition(true), 1000)
    }
  }, [transition, keycode])
  
  const typist = (
    <Typist key={id} cursor={{show: false}} avgTypingDelay={10} stdTypingDelay={10}>
      <p>{text}</p>
    </Typist>
  )
  const noTypist = <p>{text}</p>

  const renderText = () => {
    if(showText){
      return keycode !== "ArrowRight" || ref.current === text ? noTypist : typist
    }
    else {
      return ""
    }
  }
    
  return (
    <div id="script">
      {renderText()}
    </div>
  )
}
