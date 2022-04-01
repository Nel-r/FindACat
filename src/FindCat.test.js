import findCat from "./FindCat.js"

it("returns true if there is a cat", () => {
  const box = { hasCat: true }
  expect(findCat(box)).toBeTruthy()
})

it("returns false if there is no cat in the box", () => {
  const box = { hasCat: false, otherBoxes: [] }
  expect(findCat(box)).toBeFalsy()
})

it("returns true if there are cats in other boxes", () => {
  const box = {
    hasCat: false,
    otherBoxes: [{ hasCat: false, otherBoxes: [{ hasCat: true }] }],
  }
  expect(findCat(box)).toBeTruthy()
})

it("returns false if there are no cats in the other boxes", () => {
  const box = {
    hasCat: false,
    otherBoxes: [{ hasCat: false, otherBoxes: [{ hasCat: false }] }],
  }

  expect(findCat(box)).toBeFalsy()
})
