import { it, expect } from "vitest"

import { add } from "./math"

// keep tests simple and concise
// increasing the length of array to check summation wouldn't be precise
// we could create another test whose concern would be checking larger arrays
// in this case small array would suffice
// separation of concerns
it("should reduce array to it's sum", () => {
  // arrange
  const numbers = [1, 2, 3]

  // act
  const result = add(numbers)
  const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0)

  // assert
  expect(result).toBe(expectedResult)
})
