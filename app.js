import { extractNumbersFromFormInputs } from "./src/handlers/getNumbersFromFormInputs.js"
import { computeResult } from "./src/handlers/computeResult.js"
import { resultDescriptionText } from "./src/handlers/resultDescriptionText.js"

const form = document.querySelector("form")
const output = document.getElementById("result")

function formSubmitHandler(event) {
  event.preventDefault()

  const numberInputs = extractNumbersFromFormInputs(form)

  const result = computeResult(numberInputs)

  const resultText = resultDescriptionText(result)

  output.textContent = resultText
}

form.addEventListener("submit", formSubmitHandler)
