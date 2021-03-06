import React, {useEffect, useRef} from 'react';
import SecondaryScript from '../components/SecondaryScript'

export default function UpperContainer({scriptObj}){
  const {text2, type, speaker, bg} = scriptObj;
  const bgStyling = {
    backgroundImage: 'url(' + bg + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  const ref = useRef(null);
  
  useEffect(() => {
    ref.current = bg
  }, [bg])
  
  return (
    <div className={bg !== ref.current ? "fade-in" : ""} style={bgStyling} id="upper-container">
      <SecondaryScript text={text2} type={type} speaker={speaker}/>
    </div>
  )
}