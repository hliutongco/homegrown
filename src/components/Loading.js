import React from 'react';
import '../stylesheets/Loading.scss';

export default function Loading(){
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};