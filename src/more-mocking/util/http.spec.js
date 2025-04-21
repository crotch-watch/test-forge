import { vi } from "vitest"
import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"
import { sendDataRequest } from "./http"
import { HttpError } from "./errors"

const fake_http_response = { data: "test data" }
const data_not_string = "data not string"

const fake_fetch = vi.fn((url, options) => {
  const { body: data_to_be_sent } = options

  return new Promise((resolve, reject) => {
    if (typeof data_to_be_sent !== "string") reject(data_not_string)

    const response = {
      ok: true,
      json() {
        return new Promise((resolve) => resolve(fake_http_response))
      }
    }

    resolve(response)
  })
})

vi.stubGlobal("fetch", fake_fetch)

describe("handle http requests", () => {
  it("should return data on valid request", async () => {
    const fake_data = { fake: "data" }

    const fake_response = await sendDataRequest(fake_data)

    expect(fake_response).toEqual(fake_http_response)
  })

  it("should only send string in body", async () => {
    const fake_data = { fake: "data" }

    try {
      await sendDataRequest(fake_data)
    } catch (error) {
      expect(error).toBe(data_not_string)
    }
  })

  it("should throw an HttpError if !ok", async () => {
    fake_fetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve) => {
        const fake_response = {
          ok: false,
          json() {
            return new Promise((resolve) => resolve(fake_http_response))
          }
        }

        resolve(fake_response)
      })
    })

    const fake_data = { fake: "data" }

    try {
      // always fails
      await sendDataRequest(fake_data)
    } catch (error) {
      expect(error).toBeInstanceOf(HttpError)
    }
  })
})
