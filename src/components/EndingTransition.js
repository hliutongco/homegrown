import React, {useContext, useEffect} from 'react';
import {GameDisplayContext} from '../App';
import {ending, clearTransitionEnding} from '../actions';
import {ChapContext} from '../containers/AppContainer';

export default function EndingTransition() {
  const toggleGameDisplay = useContext(GameDisplayContext);
  const {state, dispatch} = useContext(ChapContext);
  const {transitionEnding} = state;

  useEffect(() => {
    if(transitionEnding === "ending"){
      setTimeout(() => {
        dispatch(clearTransitionEnding)
        dispatch(ending)
      }, 2000)
    } else if (transitionEnding === "quitGame") {
      setTimeout(() => {
        dispatch(clearTransitionEnding)
        toggleGameDisplay(false)
      }, 1500)
    }
  }, [dispatch, transitionEnding, toggleGameDisplay])

  return (
    <div className={transitionEnding ? "ending-transition" : "hidden" }></div>
  )
}