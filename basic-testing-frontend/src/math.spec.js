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

// more than one test per unit to check expected behaviour
// for each scenario
it("should add number strings", () => {
  const numbers = ["1", "2"]

  const result = add(numbers)
  // it's important to be mindful of introducing bugs while acting
  // first check actions then units
  const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0)

  expect(result).toBe(expectedResult)
})

it("should return NaN if invalid input is present", () => {
  const numbers = ["invalid", 2]

  const result = add(numbers)

  // rather than using toBe method check for specific methods provided
  expect(result).toBeNaN()
})

it("should return NaN if array has empty elements", () => {
  const numbers = []
  numbers[5] = "1"

  const result = add(numbers)

  expect(result).toBeNaN()
})

it("should return 0 when [] is passed", () => {
  const numbers = []

  const result = add(numbers)

  expect(result).toBe(0)
})

it("should throw an error when no argument is passed", () => {
  const resultFn = () => add()

  expect(resultFn).toThrow()
})
