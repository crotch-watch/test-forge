import { vi } from "vitest"
import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

const fake_http_response = { data: "test data" }

vi.stubGlobal("fetch", async (url, options) => {
  const response = {
    ok: true,
    json() {
      return fake_http_response
    }
  }
  return response
})

describe("handle http requests", () => {
  it("should return data on valid request", () => {
    const fake_url = ""
    const fake_options = {}

    return expect(fetch(fake_url, fake_options)).resolves.toBeDefined()
  })
})
