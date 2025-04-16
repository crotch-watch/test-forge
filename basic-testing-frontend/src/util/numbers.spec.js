import { it, expect } from "vitest"

import { transformToNumber } from "./numbers"

it("should transform number wrapped in string", () => {
  const number = "5"

  const result = transformToNumber(number)
  const expectedResult = +number

  expect(result).toBe(expectedResult)
})

it("should return NaN for invalid string", () => {
  // since there can be multiple invalid values
  // I can group them into one test like sub groups
  const string = "invalid"
  const object = {}

  const transformedString = transformToNumber(string)
  const transformedObject = transformToNumber(object)

  expect(transformedString).toBeNaN()
  expect(transformedObject).toBeNaN()
})
