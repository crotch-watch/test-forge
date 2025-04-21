import { vi } from "vitest"

export const promises = {
  writeFile: vi.fn((filename, data) => {
    return new Promise((resolve, reject) => {
      resolve()
    })
  })
}
