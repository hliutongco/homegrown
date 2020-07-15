import React from 'react';

export default function SecondaryScript({text = "", speaker}){
  
  return (
    <div className={text && "quote"}>
      <p dangerouslySetInnerHTML={{__html: `<span>${text}</span>`}}></p>
      <span>{speaker && `— ${speaker} —`}</span>
    </div>
  )
} 