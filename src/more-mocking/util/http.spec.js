import { vi } from "vitest"
import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

const fake_http_response = { data: "test data" }

const fake_fetch = vi.fn(() => {
  return new Promise((resolve) => {
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
  it("should return data on valid request", () => {
    const fake_url = ""
    const fake_options = {}

    return expect(fetch(fake_url, fake_options)).resolves.toBeDefined()
  })
})
