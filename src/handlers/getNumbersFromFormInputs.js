import { extractNumbers } from "../parser.js"

export const getNumbersFromFormInputs = (form) => {
  const formData = new FormData(form)
  const numberInputs = extractNumbers(formData)
  return numberInputs
}
