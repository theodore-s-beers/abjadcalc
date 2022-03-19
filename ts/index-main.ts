import { getResult } from './lib'

//
// DOM ELEMENTS
//

// Input and result fields
const inputField = document.getElementById('abjad-text') as HTMLInputElement
const resultField = document.getElementById('result') as HTMLElement

// Checkboxes
const maghribiCheckbox = document.getElementById(
  'maghribi-check'
) as HTMLInputElement
const hamzahCheckbox = document.getElementById(
  'hamzah-check'
) as HTMLInputElement

// Buttons
const submitButton = document.getElementById(
  'submit-button'
) as HTMLButtonElement
const resetButton = document.getElementById('reset-button') as HTMLButtonElement

//
// EVENT HANDLING
//

// Submit

function submitOnEnter (e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    getResult(inputField, resultField, maghribiCheckbox, hamzahCheckbox)
    e.preventDefault()
  }
}

inputField.addEventListener('keydown', submitOnEnter)

submitButton.addEventListener('click', () => {
  getResult(inputField, resultField, maghribiCheckbox, hamzahCheckbox)
})

// Reset

resetButton.addEventListener('click', () => {
  resultField.innerHTML = 'The total <em>abjad</em> value of … is …'
})
