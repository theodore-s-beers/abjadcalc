'use strict'
// Define consts used in multiple functions
const handInput = document.getElementById('hand-input')
const result = document.getElementById('result')
// Primary letter buttons row 1
document.getElementById('alif-btn').addEventListener('click', function () {
  handInput.value += '\u0627'
})
document.getElementById('ba-btn').addEventListener('click', function () {
  handInput.value += '\u0628'
})
document.getElementById('jim-btn').addEventListener('click', function () {
  handInput.value += '\u062C'
})
document.getElementById('dal-btn').addEventListener('click', function () {
  handInput.value += '\u062F'
})
document.getElementById('ha-btn').addEventListener('click', function () {
  handInput.value += '\u0647'
})
document.getElementById('waw-btn').addEventListener('click', function () {
  handInput.value += '\u0648'
})
document.getElementById('za-btn').addEventListener('click', function () {
  handInput.value += '\u0632'
})
// Primary letter buttons row 2
document.getElementById('5a-btn').addEventListener('click', function () {
  handInput.value += '\u062D'
})
document.getElementById('taw-btn').addEventListener('click', function () {
  handInput.value += '\u0637'
})
document.getElementById('ya-btn').addEventListener('click', function () {
  handInput.value += '\u064A'
})
document.getElementById('kaf-btn').addEventListener('click', function () {
  handInput.value += '\u0643'
})
document.getElementById('lam-btn').addEventListener('click', function () {
  handInput.value += '\u0644'
})
document.getElementById('mim-btn').addEventListener('click', function () {
  handInput.value += '\u0645'
})
document.getElementById('nun-btn').addEventListener('click', function () {
  handInput.value += '\u0646'
})
// Primary letter buttons row 3
document.getElementById('sin-btn').addEventListener('click', function () {
  handInput.value += '\u0633'
})
document.getElementById('ayn-btn').addEventListener('click', function () {
  handInput.value += '\u0639'
})
document.getElementById('fa-btn').addEventListener('click', function () {
  handInput.value += '\u0641'
})
document.getElementById('sad-btn').addEventListener('click', function () {
  handInput.value += '\u0635'
})
document.getElementById('qaf-btn').addEventListener('click', function () {
  handInput.value += '\u0642'
})
document.getElementById('ra-btn').addEventListener('click', function () {
  handInput.value += '\u0631'
})
document.getElementById('shin-btn').addEventListener('click', function () {
  handInput.value += '\u0634'
})
document.getElementById('ta-btn').addEventListener('click', function () {
  handInput.value += '\u062A'
})
// Primary letter buttons row 4
document.getElementById('tha-btn').addEventListener('click', function () {
  handInput.value += '\u062B'
})
document.getElementById('kha-btn').addEventListener('click', function () {
  handInput.value += '\u062E'
})
document.getElementById('dhal-btn').addEventListener('click', function () {
  handInput.value += '\u0630'
})
document.getElementById('dad-btn').addEventListener('click', function () {
  handInput.value += '\u0636'
})
document.getElementById('zaw-btn').addEventListener('click', function () {
  handInput.value += '\u0638'
})
document.getElementById('ghayn-btn').addEventListener('click', function () {
  handInput.value += '\u063A'
})
// Secondary letter buttons
document.getElementById('top-ham-btn').addEventListener('click', function () {
  handInput.value += '\u0623'
})
document
  .getElementById('bottom-ham-btn')
  .addEventListener('click', function () {
    handInput.value += '\u0625'
  })
document.getElementById('maddah-btn').addEventListener('click', function () {
  handInput.value += '\u0622'
})
document.getElementById('hamzah-btn').addEventListener('click', function () {
  handInput.value += '\u0621'
})
document.getElementById('marbutah-btn').addEventListener('click', function () {
  handInput.value += '\u0629'
})
document.getElementById('waw-ham-btn').addEventListener('click', function () {
  handInput.value += '\u0624'
})
document.getElementById('maqsurah-btn').addEventListener('click', function () {
  handInput.value += '\u0649'
})
document.getElementById('ya-ham-btn').addEventListener('click', function () {
  handInput.value += '\u0626'
})
// Persian letter buttons
document.getElementById('pe-btn').addEventListener('click', function () {
  handInput.value += '\u067E'
})
document.getElementById('che-btn').addEventListener('click', function () {
  handInput.value += '\u0686'
})
document.getElementById('ha-izafah-btn').addEventListener('click', function () {
  handInput.value += '\u06C0'
})
document.getElementById('zhe-btn').addEventListener('click', function () {
  handInput.value += '\u0698'
})
document.getElementById('pers-ya-btn').addEventListener('click', function () {
  handInput.value += '\u06CC'
})
document.getElementById('pers-kaf-btn').addEventListener('click', function () {
  handInput.value += '\u06A9'
})
document.getElementById('gaf-btn').addEventListener('click', function () {
  handInput.value += '\u06AF'
})
// Control buttons
document.getElementById('reset-btn').addEventListener('click', function () {
  result.innerHTML = 'The total <em>abjad</em> value of \u2026 is \u2026'
})
document.getElementById('space-btn').addEventListener('click', function () {
  handInput.value += ' '
})
document.getElementById('back-btn').addEventListener('click', function () {
  handInput.value = handInput.value.slice(0, -1)
})
// Function to get abjad value
function getAbjad () {
  // Take the user's input and set two new versions of it: one has all whitespace stripped for calculating the abjad value; the other is cleaned up for display to the user
  const inputForCalc = handInput.value.replace(/\s+/g, '')
  const inputForDisplay = handInput.value.replace(/\s+/g, ' ').trim()
  // See whether the user has checked the optional checkboxes in the form
  const hamzahCheckbox = document.getElementById('hamzah-check')
  const maghribiCheckbox = document.getElementById('maghribi-check')
  // Define a total to keep track of the abjad value, and an iterator
  let total = 0
  let i = 0
  // Set up the text of the result pane, which will need only to have the total added to it
  result.innerHTML =
        "The total <em>abjad</em> value of <span class='replay-input' dir='rtl' lang='ar'>\u00AB" +
            inputForDisplay +
            '\u00BB</span> is'
  // Here we go! This runs through the cleaned input, one character at a time, checking for matches with Arabic-script letters and adding the relevant abjad values to the total
  for (i = 0; i < inputForCalc.length; i += 1) {
    if (inputForCalc.charAt(i) === '\u0627' ||
            inputForCalc.charAt(i) === '\u0622' ||
            inputForCalc.charAt(i) === '\u0623' ||
            inputForCalc.charAt(i) === '\u0625' ||
            inputForCalc.charAt(i) === '\u0671') {
      total += 1
    } else if (inputForCalc.charAt(i) === '\u0621') {
      if (hamzahCheckbox.checked) {
        continue
      } else {
        total += 1
      }
    } else if (inputForCalc.charAt(i) === '\u0628' ||
            inputForCalc.charAt(i) === '\u067E') {
      total += 2
    } else if (inputForCalc.charAt(i) === '\u062C' ||
            inputForCalc.charAt(i) === '\u0686') {
      total += 3
    } else if (inputForCalc.charAt(i) === '\u062F') {
      total += 4
    } else if (inputForCalc.charAt(i) === '\u0647' ||
            inputForCalc.charAt(i) === '\u0629' ||
            inputForCalc.charAt(i) === '\u06C0') {
      total += 5
    } else if (inputForCalc.charAt(i) === '\u0648' ||
            inputForCalc.charAt(i) === '\u0624') {
      total += 6
    } else if (inputForCalc.charAt(i) === '\u0632' ||
            inputForCalc.charAt(i) === '\u0698') {
      total += 7
    } else if (inputForCalc.charAt(i) === '\u062D') {
      total += 8
    } else if (inputForCalc.charAt(i) === '\u0637') {
      total += 9
    } else if (inputForCalc.charAt(i) === '\u06CC' ||
            inputForCalc.charAt(i) === '\u0649' ||
            inputForCalc.charAt(i) === '\u064A' ||
            inputForCalc.charAt(i) === '\u0626') {
      total += 10
    } else if (inputForCalc.charAt(i) === '\u06A9' ||
            inputForCalc.charAt(i) === '\u06AF' ||
            inputForCalc.charAt(i) === '\u0643') {
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
  // Remove focus from the text entry field upon form submission
  document.getElementById('hand-input').blur()
}
