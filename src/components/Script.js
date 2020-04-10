import React, {useRef, useEffect, useState} from 'react';
import Typist from 'react-typist';

export default function Script({id, text, transition, keycode}) {
  const [showText, toggleTransition] = useState(true)

  const textRef = useRef(null)
  const transitionRef = useRef(false)

  useEffect(()  =>  {
    textRef.current = text
  }, [text])

  useEffect(() => {
    if(transition){
      toggleTransition(false)
      transitionRef.current = true

      setTimeout(() => {
        toggleTransition(true)
        transitionRef.current = false
      }, 1000)
    }
  }, [transition])
  
  const typist = (
    <Typist key={id} cursor={{show: false}} avgTypingDelay={10} stdTypingDelay={10}>
      <p>{text}</p>
    </Typist>
  )
  const noTypist = <p>{text}</p>

  const renderTypist = () => {
    if(keycode === "ArrowRight"){
      return textRef.current !== text || transitionRef.current
    } else {
      return textRef.current === null
    }
  }

  const renderText = () => {    
    if(showText){      
      return renderTypist() ? typist : noTypist
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
