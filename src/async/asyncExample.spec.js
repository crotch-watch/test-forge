import { describe, it, expect } from "vitest"

import { generateToken, generateTokenPromise } from "./async-example"

describe("Async Callback Token", () => {
  const userEmail = "johnDoe@email.com"

  it("demos why normal calling won't work", () => {
    generateToken(userEmail, (err, token) => {
      // here I'm receiving token but
      // these expectations will pass either met or not
      // these won't register while async
      expect(token).toThrow()
      expect(token).toBeNull()
    })
  })

  it("shows doneFn usage for async callback usage", (done) => {
    generateToken(userEmail, (err, token) => {
      // doneFn makes sure these run as expected
      try {
        expect(token).toBeTypeOf("string")
        done()
      } catch (error) {
        done(error)
      }
    })
  })

  it.skip("shows doneFn doesn't fix everything", (done) => {
    generateToken(userEmail, (err, token) => {
      // token is a string
      // but it won't detect it
      // and default test timer will expire
      // but error thrown by toBe methods won't be catched
      expect(token).toBeNull()

      try {
        expect(token).toBeTypeOf("string")
        done()
      } catch (error) {
        done(error)
      }
    })
  })

  it("shows how to shift expectations into try block", (done) => {
    generateToken(userEmail, (err, token) => {
      try {
        // uncomment this line to check intended error behavior
        // expect(token).toBeNull()
        expect(token).toBeTypeOf("string")
        done()
      } catch (error) {
        done(error)
      }
    })
  })

  it("demos solution using expect", () => {
    return expect(generateTokenPromise(userEmail)).resolves.toBeDefined()
  })

  it("demos solution using async await", async () => {
    const token = await generateTokenPromise(userEmail)

    expect(token).toBeDefined()
    expect(token).toBeTypeOf("string")
  })
})
