import { it, expect, describe } from "vitest"

import { resultDescriptionText } from "./resultDescriptionText"

describe("function resultDescriptionText()", () => {
  it("should return string irrespective of argument data type", () => {
    const string = "string"
    const object = {}
    const number = 0

    const stringRes = resultDescriptionText(string)
    const objectRes = resultDescriptionText(object)
    const numberRes = resultDescriptionText(number)

    expect(stringRes).toBeTypeOf("string")
    expect(objectRes).toBeTypeOf("string")
    expect(numberRes).toBeTypeOf("string")
  })

  it("should return valid number string", () => {
    const string = "invalid"
    const invalidNumber = "Invalid input. You must enter valid numbers."

    const result = resultDescriptionText(string)

    expect(result).toBe(invalidNumber)
  })
})
