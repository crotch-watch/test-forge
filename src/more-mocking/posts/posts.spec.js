import { expect } from "vitest"
import { describe } from "vitest"
import { extractPostData } from "./posts"
import { it } from "vitest"

describe("function extractPostedData", () => {
  it("should extract values of keys in object", () => {
    const content = "content"
    const title = "title"
    const fake_form = {
      content,
      title,
      get(key) {
        return this[key]
      }
    }
    const exected_return = { content, title }

    const result = extractPostData(fake_form)

    expect(result).toEqual(exected_return)
  })

  it("should throw an error when key doesn't exist", () => {
    const content = "content"
    const fake_form = {
      content,
      get(key) {
        return this[key]
      }
    }
    const expected_error = "A title must be provided."

    try {
      extractPostData(fake_form)
    } catch (error) {
      expect(error.message).toBe(expected_error)
    }
  })
})
