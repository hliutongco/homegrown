import React from 'react';

export default function SecondaryScript({text = "", type, speaker}){
  
  return (
    <div className={type}>
      <p dangerouslySetInnerHTML={{__html: `<span>${text}</span>`}}></p>
      <span>{speaker && `— ${speaker} —`}</span>
    </div>
  )
} 