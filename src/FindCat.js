const findCat = (myBox) => {
  if (myBox.hasCat) return true

  for (let i = 0; i < myBox.otherBoxes?.length; i++) {
    if (findCat(myBox.otherBoxes[i])) {
      return true
    }
  }

  return false
}

export default findCat
