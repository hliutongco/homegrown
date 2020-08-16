export const increaseLine = {
  type: "increaseLine"
}

export const decreaseLine = {
  type: "decreaseLine"
}

export const completeLine = {
  type: "completeLine"
}

export const skipChapter = (savedIndex) => {
  return {
    type: 'skipChapter',
    data: savedIndex
  }
}

export const ending = {
  type: "ending"
}

export const transitionEnding = {
  type: "transitionEnding"
}

export const clearTransitionEnding = {
  type: "clearTransitionEnding"
}