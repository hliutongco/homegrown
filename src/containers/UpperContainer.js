import React, {useEffect, useRef} from 'react';
import SecondaryScript from '../components/SecondaryScript'

export default function UpperContainer({id, scriptObj}){
  const {text2, type, speaker, bg = './silver-bg.jpg'} = scriptObj
  const bgStyling = {
    backgroundImage: 'url(' + bg + ')',
    backgroundSize: 'cover'
  }
  const ref = useRef(null);
  
  useEffect(() => {
    ref.current = bg
  }, [bg])
  console.log(ref.current);
  console.log(bg);
  
  return (
    <div className={bg !== ref.current ? "fade-in" : ""} style={bgStyling} id="upper-container">
      <SecondaryScript text={text2} type={type} speaker={speaker}/>
    </div>
  )
}