// eslint-disable-next-line
function getAbjad(): void {
  // Define variable for input field
  const getInput = document.getElementById('abjad-text') as HTMLInputElement

  // Set two new versions of input text
  // One has all whitespace stripped for calculating abjad value
  // The other is cleaned up for re-display
  const inputForCalc = getInput.value.replace(/\s+/g, '')
  const inputForDisplay = getInput.value.replace(/\s+/g, ' ').trim()

  // Define variables for option checkboxes
  const hamzahCheckbox = document.getElementById(
    'hamzah-check'
  ) as HTMLInputElement
  const maghribiCheckbox = document.getElementById(
    'maghribi-check'
  ) as HTMLInputElement

  // Define a total to keep track of the abjad value, and an iterator
  let total = 0
  let i = 0

  // Define variable for result pane
  const result = document.getElementById('result') as HTMLElement

  // Prepare the text of the result pane
  result.innerHTML =
    "The total <em>abjad</em> value of <span class='replay-input' dir='rtl' lang='ar'>\u00AB" +
    inputForDisplay +
    '\u00BB</span> is'

  // Here we go! Run through the cleaned input, one character at a time
  // Check for matches with Arabic-script letters
  // Add relevant abjad values to the total
  for (i = 0; i < inputForCalc.length; i += 1) {
    if (
      inputForCalc.charAt(i) === '\u0627' ||
      inputForCalc.charAt(i) === '\u0622' ||
      inputForCalc.charAt(i) === '\u0623' ||
      inputForCalc.charAt(i) === '\u0625' ||
      inputForCalc.charAt(i) === '\u0671'
    ) {
      total += 1
    } else if (inputForCalc.charAt(i) === '\u0621') {
      if (hamzahCheckbox.checked) {
        continue
      } else {
        total += 1
      }
    } else if (
      inputForCalc.charAt(i) === '\u0628' ||
      inputForCalc.charAt(i) === '\u067E'
    ) {
      total += 2
    } else if (
      inputForCalc.charAt(i) === '\u062C' ||
      inputForCalc.charAt(i) === '\u0686'
    ) {
      total += 3
    } else if (inputForCalc.charAt(i) === '\u062F') {
      total += 4
    } else if (
      inputForCalc.charAt(i) === '\u0647' ||
      inputForCalc.charAt(i) === '\u0629' ||
      inputForCalc.charAt(i) === '\u06C0'
    ) {
      total += 5
    } else if (
      inputForCalc.charAt(i) === '\u0648' ||
      inputForCalc.charAt(i) === '\u0624'
    ) {
      total += 6
    } else if (
      inputForCalc.charAt(i) === '\u0632' ||
      inputForCalc.charAt(i) === '\u0698'
    ) {
      total += 7
    } else if (inputForCalc.charAt(i) === '\u062D') {
      total += 8
    } else if (inputForCalc.charAt(i) === '\u0637') {
      total += 9
    } else if (
      inputForCalc.charAt(i) === '\u06CC' ||
      inputForCalc.charAt(i) === '\u0649' ||
      inputForCalc.charAt(i) === '\u064A' ||
      inputForCalc.charAt(i) === '\u0626'
    ) {
      total += 10
    } else if (
      inputForCalc.charAt(i) === '\u06A9' ||
      inputForCalc.charAt(i) === '\u06AF' ||
      inputForCalc.charAt(i) === '\u0643'
    ) {
      total += 20
    } else if (inputForCalc.charAt(i) === '\u0644') {
      total += 30
    } else if (inputForCalc.charAt(i) === '\u0645') {
      total += 40
    } else if (inputForCalc.charAt(i) === '\u0646') {
      total += 50
    } else if (inputForCalc.charAt(i) === '\u0633') {
      if (maghribiCheckbox.checked) {
        total += 300
      } else {
        total += 60
      }
    } else if (inputForCalc.charAt(i) === '\u0639') {
      total += 70
    } else if (inputForCalc.charAt(i) === '\u0641') {
      total += 80
    } else if (inputForCalc.charAt(i) === '\u0635') {
      if (maghribiCheckbox.checked) {
        total += 60
      } else {
        total += 90
      }
    } else if (inputForCalc.charAt(i) === '\u0642') {
      total += 100
    } else if (inputForCalc.charAt(i) === '\u0631') {
      total += 200
    } else if (inputForCalc.charAt(i) === '\u0634') {
      if (maghribiCheckbox.checked) {
        total += 1000
      } else {
        total += 300
      }
    } else if (inputForCalc.charAt(i) === '\u062A') {
      total += 400
    } else if (inputForCalc.charAt(i) === '\u062B') {
      total += 500
    } else if (inputForCalc.charAt(i) === '\u062E') {
      total += 600
    } else if (inputForCalc.charAt(i) === '\u0630') {
      total += 700
    } else if (inputForCalc.charAt(i) === '\u0636') {
      if (maghribiCheckbox.checked) {
        total += 90
      } else {
        total += 800
      }
    } else if (inputForCalc.charAt(i) === '\u0638') {
      if (maghribiCheckbox.checked) {
        total += 800
      } else {
        total += 900
      }
    } else if (inputForCalc.charAt(i) === '\u063A') {
      if (maghribiCheckbox.checked) {
        total += 900
      } else {
        total += 1000
      }
    } else if (inputForCalc.charAt(i) === '\u200C') {
      continue
    } else {
      // If the character wasn't recognized, add an error message
      result.innerHTML =
        "At least one of the characters entered was not recognized and has been ignored.<br>That said, the computed <em>abjad</em> value of <span class='replay-input' dir='rtl' lang='ar'>\u00AB" +
        inputForDisplay +
        '\u00BB</span> is'
      continue
    }
  }

  // Add the final total to the text of the result pane
  result.innerHTML += ' ' + total.toString() + '.'

  // Remove focus from input field
  getInput.blur()
}
