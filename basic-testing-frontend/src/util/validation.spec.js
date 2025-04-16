import { it, expect, describe } from "vitest"

import { validateNumber, validateStringNotEmpty } from "./validation"

describe("function validateStringNotEmpty()", () => {
  it("should throw an error when '' is passed", () => {
    const resultFnUntrimmed = () => validateStringNotEmpty("  ")
    const resultFnTrimmed = () => validateStringNotEmpty("")

    expect(resultFnUntrimmed).toThrow(/must not be empty/)
    expect(resultFnTrimmed).toThrow(/must not be empty/)
  })

  it("shouldn't throw an error when non-empty string is passed", () => {
    const string = "string"

    const resultFn = () => validateStringNotEmpty(string)

    expect(resultFn).not.toThrow(/must not be empty/)
  })
})
