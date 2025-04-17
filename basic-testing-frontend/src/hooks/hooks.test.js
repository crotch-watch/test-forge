import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from "vitest"

import { User } from "./hooks"

// benefit of global variables is they can be shared
// but sharing also allows for mutation.
const testEmail = "test@test.com"
let user = new User(testEmail)

// regular Fn. can be used with each suite
beforeAll(() => console.log("tests begin"))
beforeEach(() => (user = new User(testEmail)))
afterEach(() => console.log("test done"))
afterAll(() => console.log("tests end"))

it("should update the email", () => {
  const newTestEmail = "test2@test.com"

  user.updateEmail(newTestEmail)

  expect(user.email).toBe(newTestEmail)
})

it("should have an email property", () => {
  expect(user).toHaveProperty("email")
})

it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail)
})

it("should clear the email", () => {
  user.clearEmail()

  expect(user.email).toBe("")
})

it("should still have an email property after clearing the email", () => {
  user.clearEmail()

  expect(user).toHaveProperty("email")
})
