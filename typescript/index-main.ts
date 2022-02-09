import { getAbjad } from './abjad'

//
// DOM ELEMENTS
//

// Input and result fields
const inputField = document.getElementById('abjad-text') as HTMLInputElement
const resultField = document.getElementById('result')

// Checkboxes
const maghribiCheckbox = document.getElementById(
  'maghribi-check'
) as HTMLInputElement
const hamzahCheckbox = document.getElementById(
  'hamzah-check'
) as HTMLInputElement

// Buttons
const submitButton = document.getElementById('submit-button')
const resetButton = document.getElementById('reset-button')

//
// FUNCTIONS
//

function getResult () {
  const input = inputField.value
  const maghribiOrder = maghribiCheckbox.checked
  const ignoreHamzah = hamzahCheckbox.checked

  const [total, unrecognizedChars] = getAbjad(
    input,
    maghribiOrder,
    ignoreHamzah
  )

  const inputForDisplay = input.replace(/\s+/g, ' ').trim()

  let resultText = unrecognizedChars
    ? "At least one of the characters entered was not recognized and has been ignored.<br>That said, the computed <em>abjad</em> value of <span class='replay-input' dir='rtl' lang='ar'>«" +
      inputForDisplay +
      '»</span> is'
    : "The total <em>abjad</em> value of <span class='replay-input' dir='rtl' lang='ar'>«" +
      inputForDisplay +
      '»</span> is'

  resultText += ' ' + total + '.'

  resultField.innerHTML = resultText
  inputField.blur()
}

function reset () {
  resultField.innerHTML = 'The total <em>abjad</em> value of … is …'
}

function submitOnEnter (e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    getResult()
    e.preventDefault()
  }
}

//
// EVENT LISTENERS
//

inputField.addEventListener('keydown', submitOnEnter)
submitButton.addEventListener('click', getResult)
resetButton.addEventListener('click', reset)
