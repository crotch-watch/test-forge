import fs from "node:fs"
import path from "node:path/win32"

import { vi, it } from "vitest"
import { Window } from "happy-dom"

import { showError } from "./dom"
import { expect } from "vitest"

const htmlDocPath = path.join(process.cwd(), "\\src\\more-mocking\\index.html")

const file_buffer = fs.readFileSync(htmlDocPath)

const window = new Window()
const document = window.document
document.write(file_buffer.toString("utf-8"))

vi.stubGlobal("document", document)

it("should contain p element", () => {
  showError("errror!")
  const error_container = document.querySelector("#errors")
  const error_p = error_container.firstElementChild

  expect(error_p).not.toBeNull()
})
