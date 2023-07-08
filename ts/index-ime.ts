import { getResult } from './lib'

//
// MAIN DOM ELEMENTS
//

// Input and result fields
const inputField = document.getElementById('hand-input') as HTMLInputElement
const resultField = document.getElementById('result') as HTMLElement

// Checkboxes
const maghribiCheckbox = document.getElementById(
  'maghribi-check',
) as HTMLInputElement
const hamzahCheckbox = document.getElementById(
  'hamzah-check',
) as HTMLInputElement

// Submit button
const goButton = document.getElementById('go-btn') as HTMLButtonElement

//
// BUTTONS!
//

// Primary letter buttons row 1
document.getElementById('alif-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ا')
})
document.getElementById('ba-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ب')
})
document.getElementById('jim-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ج')
})
document.getElementById('dal-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('د')
})
document.getElementById('ha-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ه')
})
document.getElementById('waw-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('و')
})
document.getElementById('za-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ز')
})

// Primary letter buttons row 2
document.getElementById('5a-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ح')
})
document.getElementById('taw-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ط')
})
document.getElementById('ya-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ي')
})
document.getElementById('kaf-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ك')
})
document.getElementById('lam-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ل')
})
document.getElementById('mim-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('م')
})
document.getElementById('nun-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ن')
})

// Primary letter buttons row 3
document.getElementById('sin-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('س')
})
document.getElementById('ayn-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ع')
})
document.getElementById('fa-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ف')
})
document.getElementById('sad-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ص')
})
document.getElementById('qaf-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ق')
})
document.getElementById('ra-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ر')
})
document.getElementById('shin-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ش')
})
document.getElementById('ta-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ت')
})

// Primary letter buttons row 4
document.getElementById('tha-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ث')
})
document.getElementById('kha-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('خ')
})
document.getElementById('dhal-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ذ')
})
document.getElementById('dad-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ض')
})
document.getElementById('zaw-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ظ')
})
document.getElementById('ghayn-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('غ')
})

// Secondary letter buttons
document.getElementById('top-ham-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('أ')
})
document.getElementById('bottom-ham-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('إ')
})
document.getElementById('maddah-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('آ')
})
document.getElementById('hamzah-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ء')
})
document.getElementById('marbutah-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ة')
})
document.getElementById('waw-ham-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ؤ')
})
document.getElementById('maqsurah-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ى')
})
document.getElementById('ya-ham-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ئ')
})

// Persian letter buttons
document.getElementById('pe-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('پ')
})
document.getElementById('che-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('چ')
})
document.getElementById('ha-izafah-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ۀ')
})
document.getElementById('zhe-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ژ')
})
document.getElementById('pers-ya-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ی')
})
document.getElementById('pers-kaf-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('ک')
})
document.getElementById('gaf-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat('گ')
})

// Control buttons
document.getElementById('reset-btn')?.addEventListener('click', () => {
  resultField.innerHTML = 'The total <em>abjad</em> value of … is …'
})
document.getElementById('space-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.concat(' ')
})
document.getElementById('back-btn')?.addEventListener('click', () => {
  inputField.value = inputField.value.slice(0, -1)
})

//
// SUBMISSION HANDLING
//

function submitOnEnter (e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    getResult(inputField, resultField, maghribiCheckbox, hamzahCheckbox)
    e.preventDefault()
  }
}

inputField.addEventListener('keydown', submitOnEnter)

goButton.addEventListener('click', () => {
  getResult(inputField, resultField, maghribiCheckbox, hamzahCheckbox)
})
