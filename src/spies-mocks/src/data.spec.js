import { it, expect, vi } from "vitest"

import { generateReportData } from "./data"

it("should check logger invokation", () => {
  const logger = vi.fn()

  generateReportData(logger)

  expect(logger).toBeCalled()
})
