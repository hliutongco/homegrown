import React, {useRef, useEffect} from 'react';
import Typist from 'react-typist';

export default function Script({id, text = "", keycode}) {
  const ref = useRef()
  useEffect(()  =>  {
    ref.current = text
  }, [text])
  
  const typist = (
    <Typist key={id} cursor={{show: false}} avgTypingDelay={10} stdTypingDelay={10}>
      <p>{text}</p>
    </Typist>
  )
  const noTypist = <p>{text}</p>
    
  return (
    <div id="script">
      {keycode !== "ArrowRight" || ref.current === text ? noTypist : typist}
    </div>
  )
}
