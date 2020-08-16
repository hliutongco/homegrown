import React, {useEffect, useRef, useContext} from 'react';
import {GameDisplayContext} from '../App';
import SecondaryScript from '../components/SecondaryScript'

export default function UpperContainer({id, scriptObj}){
  let {imageObjs} = useContext(GameDisplayContext);

  const {text2, type, speaker, bg} = scriptObj;
  const bgObj = imageObjs.find(imageObj => imageObj.name === bg)
  const bgURL = bgObj ? bgObj.url : null;
  const bgStyling = {
    backgroundImage: 'url(' + bgURL + ')',
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