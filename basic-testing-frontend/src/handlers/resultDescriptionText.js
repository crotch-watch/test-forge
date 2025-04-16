export const resultDescriptionText = (result) => {
  let text = ""

  if (result === "invalid") {
    text = "Invalid input. You must enter valid numbers."
  } else if (result !== "no-calc") {
    text = "Result: " + result
  }

  return text
}
