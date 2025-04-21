import { describe, it, expect } from "vitest"
import { HttpError } from "./errors"

describe("Class HttpError", () => {
  it("should contain data for provided fields", () => {
    const statusCode = 200
    const message = "test message"
    const data = { values: null }

    const httpError = new HttpError(statusCode, message, data)

    expect(httpError.data).toEqual(data)
    expect(httpError.message).toBe(message)
    expect(httpError.statusCode).toBe(statusCode)
  })
})
