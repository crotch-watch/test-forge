import { it, expect, vi } from "vitest"
import { promises as fs } from "fs"

import writeData from "./io"

vi.mock("fs")

it("should mock node:fs and spy fs.writeFile invokation", () => {
  const test_filename = "./test.txt"
  const test_data = "test data"

  writeData(test_data, test_filename)

  expect(fs.writeFile).toBeCalled()
})
