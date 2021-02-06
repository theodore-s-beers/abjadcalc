// Define variable for input field
const getInput = document.getElementById('abjad-text') as HTMLInputElement

// Define variable for result pane
const result = document.getElementById('result') as HTMLElement

function getAbjad (): void {
  // Set two new versions of input text
  // One has all whitespace stripped for calculating abjad value
  // The other is cleaned up for re-display
  const inputForCalc = getInput.value.replace(/\s+/g, '')
  const inputForDisplay: string = getInput.value.replace(/\s+/g, ' ').trim()

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

  // Prepare the text of the result pane
  result.innerHTML =
    "The total <em>abjad</em> value of <span class='replay-input' dir='rtl' lang='ar'>«" +
    inputForDisplay +
    '»</span> is'

  // Here we go! Run through the cleaned input, one character at a time
  // Check for matches with Arabic-script letters
  // Add relevant abjad values to the total
  for (i = 0; i < inputForCalc.length; i += 1) {
    if (
      inputForCalc.charAt(i) === 'ا' ||
      inputForCalc.charAt(i) === 'آ' ||
      inputForCalc.charAt(i) === 'أ' ||
      inputForCalc.charAt(i) === 'إ' ||
      inputForCalc.charAt(i) === 'ٱ'
    ) {
      total += 1
    } else if (inputForCalc.charAt(i) === 'ء') {
      if (hamzahCheckbox.checked) {
        continue
      } else {
        total += 1
      }
    } else if (
      inputForCalc.charAt(i) === 'ب' ||
      inputForCalc.charAt(i) === 'پ'
    ) {
      total += 2
    } else if (
      inputForCalc.charAt(i) === 'ج' ||
      inputForCalc.charAt(i) === 'چ'
    ) {
      total += 3
    } else if (inputForCalc.charAt(i) === 'د') {
      total += 4
    } else if (
      inputForCalc.charAt(i) === 'ه' ||
      inputForCalc.charAt(i) === 'ة' ||
      inputForCalc.charAt(i) === 'ۀ'
    ) {
      total += 5
    } else if (
      inputForCalc.charAt(i) === 'و' ||
      inputForCalc.charAt(i) === 'ؤ'
    ) {
      total += 6
    } else if (
      inputForCalc.charAt(i) === 'ز' ||
      inputForCalc.charAt(i) === 'ژ'
    ) {
      total += 7
    } else if (inputForCalc.charAt(i) === 'ح') {
      total += 8
    } else if (inputForCalc.charAt(i) === 'ط') {
      total += 9
    } else if (
      inputForCalc.charAt(i) === 'ی' ||
      inputForCalc.charAt(i) === 'ى' ||
      inputForCalc.charAt(i) === 'ي' ||
      inputForCalc.charAt(i) === 'ئ'
    ) {
      total += 10
    } else if (
      inputForCalc.charAt(i) === 'ک' ||
      inputForCalc.charAt(i) === 'گ' ||
      inputForCalc.charAt(i) === 'ك'
    ) {
      total += 20
    } else if (inputForCalc.charAt(i) === 'ل') {
      total += 30
    } else if (inputForCalc.charAt(i) === 'م') {
      total += 40
    } else if (inputForCalc.charAt(i) === 'ن') {
      total += 50
    } else if (inputForCalc.charAt(i) === 'س') {
      if (maghribiCheckbox.checked) {
        total += 300
      } else {
        total += 60
      }
    } else if (inputForCalc.charAt(i) === 'ع') {
      total += 70
    } else if (inputForCalc.charAt(i) === 'ف') {
      total += 80
    } else if (inputForCalc.charAt(i) === 'ص') {
      if (maghribiCheckbox.checked) {
        total += 60
      } else {
        total += 90
      }
    } else if (inputForCalc.charAt(i) === 'ق') {
      total += 100
    } else if (inputForCalc.charAt(i) === 'ر') {
      total += 200
    } else if (inputForCalc.charAt(i) === 'ش') {
      if (maghribiCheckbox.checked) {
        total += 1000
      } else {
        total += 300
      }
    } else if (inputForCalc.charAt(i) === 'ت') {
      total += 400
    } else if (inputForCalc.charAt(i) === 'ث') {
      total += 500
    } else if (inputForCalc.charAt(i) === 'خ') {
      total += 600
    } else if (inputForCalc.charAt(i) === 'ذ') {
      total += 700
    } else if (inputForCalc.charAt(i) === 'ض') {
      if (maghribiCheckbox.checked) {
        total += 90
      } else {
        total += 800
      }
    } else if (inputForCalc.charAt(i) === 'ظ') {
      if (maghribiCheckbox.checked) {
        total += 800
      } else {
        total += 900
      }
    } else if (inputForCalc.charAt(i) === 'غ') {
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
        "At least one of the characters entered was not recognized and has been ignored.<br>That said, the computed <em>abjad</em> value of <span class='replay-input' dir='rtl' lang='ar'>«" +
        inputForDisplay +
        '»</span> is'
      continue
    }
  }

  // Add the final total to the text of the result pane
  result.innerHTML += ' ' + total.toString() + '.'

  // Remove focus from input field
  getInput.blur()
}

//
// NEW MISCELLANY
//

function submitOnEnter (event: KeyboardEvent): void {
  if (event.key === 'Enter' && !event.shiftKey) {
    getAbjad()
    event.preventDefault()
  }
}

getInput.addEventListener('keydown', submitOnEnter)

const submitButton = document.getElementById(
  'submit-button'
) as HTMLInputElement
submitButton.addEventListener('click', getAbjad)

const resetButton = document.getElementById('reset-button') as HTMLInputElement
resetButton.addEventListener('click', function () {
  result.innerHTML = 'The total <em>abjad</em> value of … is …'
})
