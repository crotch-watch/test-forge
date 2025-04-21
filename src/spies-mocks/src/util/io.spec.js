import { it, expect, vi } from "vitest"
import { promises as fs } from "fs"
import writeData from "./io"

vi.mock("fs")
vi.mock("path", () => {
  return {
    default: {
      join: (...paths) => {
        const provided_filename_arg = paths[paths.length - 1]
        return provided_filename_arg
      }
    }
  }
})

it("should mock node:fs and spy fs.writeFile invokation", () => {
  const test_filename = "./test.txt"
  const test_data = "test data"

  writeData(test_data, test_filename)

  expect(fs.writeFile).toBeCalled()
})

it("should check arguments passed to fs.writeFile", () => {
  const test_filename = "./test.txt"
  const test_data = "test data"

  writeData(test_data, test_filename)

  expect(fs.writeFile).toBeCalledWith(test_filename, test_data)
  // there could also be one case where I can check whether
  // path.join return includes test_filename
})

it("should resolve with undedined", async () => {
  const test_filename = "./test.txt"
  const test_data = "test data"

  const result = await writeData(test_data, test_filename)

  return expect(result).toBeUndefined()
})
