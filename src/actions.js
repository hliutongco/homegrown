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