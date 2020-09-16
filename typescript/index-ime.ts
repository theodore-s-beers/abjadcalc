// Define a variable used throughout
const handInput = document.getElementById('hand-input') as HTMLInputElement;

// Primary letter buttons row 1
(document.getElementById('alif-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ا')
  }
);
(document.getElementById('ba-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ب')
  }
);
(document.getElementById('jim-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ج')
  }
);
(document.getElementById('dal-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('د')
  }
);
(document.getElementById('ha-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ه')
  }
);
(document.getElementById('waw-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('و')
  }
);
(document.getElementById('za-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ز')
  }
);

// Primary letter buttons row 2
(document.getElementById('5a-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ح')
  }
);
(document.getElementById('taw-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ط')
  }
);
(document.getElementById('ya-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ي')
  }
);
(document.getElementById('kaf-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ك')
  }
);
(document.getElementById('lam-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ل')
  }
);
(document.getElementById('mim-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('م')
  }
);
(document.getElementById('nun-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ن')
  }
);

// Primary letter buttons row 3
(document.getElementById('sin-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('س')
  }
);
(document.getElementById('ayn-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ع')
  }
);
(document.getElementById('fa-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ف')
  }
);
(document.getElementById('sad-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ص')
  }
);
(document.getElementById('qaf-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ق')
  }
);
(document.getElementById('ra-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ر')
  }
);
(document.getElementById('shin-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ش')
  }
);
(document.getElementById('ta-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ت')
  }
);

// Primary letter buttons row 4
(document.getElementById('tha-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ث')
  }
);
(document.getElementById('kha-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('خ')
  }
);
(document.getElementById('dhal-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ذ')
  }
);
(document.getElementById('dad-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ض')
  }
);
(document.getElementById('zaw-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ظ')
  }
);
(document.getElementById('ghayn-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('غ')
  }
);

// Secondary letter buttons
(document.getElementById('top-ham-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('أ')
  }
);
(document.getElementById(
  'bottom-ham-btn'
) as HTMLInputElement).addEventListener('click', function () {
  handInput.value = handInput.value.concat('إ')
});
(document.getElementById('maddah-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('آ')
  }
);
(document.getElementById('hamzah-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ء')
  }
);
(document.getElementById('marbutah-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ة')
  }
);
(document.getElementById('waw-ham-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ؤ')
  }
);
(document.getElementById('maqsurah-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ى')
  }
);
(document.getElementById('ya-ham-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ئ')
  }
);

// Persian letter buttons
(document.getElementById('pe-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('پ')
  }
);
(document.getElementById('che-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('چ')
  }
);
(document.getElementById('ha-izafah-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ۀ')
  }
);
(document.getElementById('zhe-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ژ')
  }
);
(document.getElementById('pers-ya-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ی')
  }
);
(document.getElementById('pers-kaf-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('ک')
  }
);
(document.getElementById('gaf-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat('گ')
  }
);

// Control buttons
(document.getElementById('reset-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    (document.getElementById('result') as HTMLElement).innerHTML =
      'The total <em>abjad</em> value of … is …'
  }
);
(document.getElementById('space-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.concat(' ')
  }
);
(document.getElementById('back-btn') as HTMLInputElement).addEventListener(
  'click',
  function () {
    handInput.value = handInput.value.slice(0, -1)
  }
)

// Function to get abjad value
// eslint-disable-next-line
function getAbjadIME(): void {
  // Take input and set two new versions of it
  // One has all whitespace stripped for calculating abjad value
  // The other is cleaned up for re-display
  const inputForCalc = handInput.value.replace(/\s+/g, '')
  const inputForDisplay: string = handInput.value.replace(/\s+/g, ' ').trim()

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
  handInput.blur()
}
