"use strict";

// Define consts used in multiple functions
const handInput = document.getElementById("hand_input");
const result = document.getElementById("result");

// Primary letter buttons row 1
document.getElementById("alif_btn").addEventListener("click", function () {
  handInput.value += "\u0627";
});
document.getElementById("ba_btn").addEventListener("click", function () {
  handInput.value += "\u0628";
});
document.getElementById("jim_btn").addEventListener("click", function () {
  handInput.value += "\u062C";
});
document.getElementById("dal_btn").addEventListener("click", function () {
  handInput.value += "\u062F";
});
document.getElementById("ha_btn").addEventListener("click", function () {
  handInput.value += "\u0647";
});
document.getElementById("waw_btn").addEventListener("click", function () {
  handInput.value += "\u0648";
});
document.getElementById("za_btn").addEventListener("click", function () {
  handInput.value += "\u0632";
});

// Primary letter buttons row 2
document.getElementById("5a_btn").addEventListener("click", function () {
  handInput.value += "\u062D";
});
document.getElementById("taw_btn").addEventListener("click", function () {
  handInput.value += "\u0637";
});
document.getElementById("ya_btn").addEventListener("click", function () {
  handInput.value += "\u064A";
});
document.getElementById("kaf_btn").addEventListener("click", function () {
  handInput.value += "\u0643";
});
document.getElementById("lam_btn").addEventListener("click", function () {
  handInput.value += "\u0644";
});
document.getElementById("mim_btn").addEventListener("click", function () {
  handInput.value += "\u0645";
});
document.getElementById("nun_btn").addEventListener("click", function () {
  handInput.value += "\u0646";
});

// Primary letter buttons row 3
document.getElementById("sin_btn").addEventListener("click", function () {
  handInput.value += "\u0633";
});
document.getElementById("ayn_btn").addEventListener("click", function () {
  handInput.value += "\u0639";
});
document.getElementById("fa_btn").addEventListener("click", function () {
  handInput.value += "\u0641";
});
document.getElementById("sad_btn").addEventListener("click", function () {
  handInput.value += "\u0635";
});
document.getElementById("qaf_btn").addEventListener("click", function () {
  handInput.value += "\u0642";
});
document.getElementById("ra_btn").addEventListener("click", function () {
  handInput.value += "\u0631";
});
document.getElementById("shin_btn").addEventListener("click", function () {
  handInput.value += "\u0634";
});
document.getElementById("ta_btn").addEventListener("click", function () {
  handInput.value += "\u062A";
});

// Primary letter buttons row 4
document.getElementById("tha_btn").addEventListener("click", function () {
  handInput.value += "\u062B";
});
document.getElementById("kha_btn").addEventListener("click", function () {
  handInput.value += "\u062E";
});
document.getElementById("dhal_btn").addEventListener("click", function () {
  handInput.value += "\u0630";
});
document.getElementById("dad_btn").addEventListener("click", function () {
  handInput.value += "\u0636";
});
document.getElementById("zaw_btn").addEventListener("click", function () {
  handInput.value += "\u0638";
});
document.getElementById("ghayn_btn").addEventListener("click", function () {
  handInput.value += "\u063A";
});

// Secondary letter buttons
document.getElementById("top_ham_btn").addEventListener("click", function () {
  handInput.value += "\u0623";
});
document
  .getElementById("bottom_ham_btn")
  .addEventListener("click", function () {
    handInput.value += "\u0625";
  });
document.getElementById("maddah_btn").addEventListener("click", function () {
  handInput.value += "\u0622";
});
document.getElementById("hamzah_btn").addEventListener("click", function () {
  handInput.value += "\u0621";
});
document.getElementById("marbutah_btn").addEventListener("click", function () {
  handInput.value += "\u0629";
});
document.getElementById("waw_ham_btn").addEventListener("click", function () {
  handInput.value += "\u0624";
});
document.getElementById("maqsurah_btn").addEventListener("click", function () {
  handInput.value += "\u0649";
});
document.getElementById("ya_ham_btn").addEventListener("click", function () {
  handInput.value += "\u0626";
});

// Persian letter buttons
document.getElementById("pe_btn").addEventListener("click", function () {
  handInput.value += "\u067E";
});
document.getElementById("che_btn").addEventListener("click", function () {
  handInput.value += "\u0686";
});
document.getElementById("ha_izafah_btn").addEventListener("click", function () {
  handInput.value += "\u06C0";
});
document.getElementById("zhe_btn").addEventListener("click", function () {
  handInput.value += "\u0698";
});
document.getElementById("pers_ya_btn").addEventListener("click", function () {
  handInput.value += "\u06CC";
});
document.getElementById("pers_kaf_btn").addEventListener("click", function () {
  handInput.value += "\u06A9";
});
document.getElementById("gaf_btn").addEventListener("click", function () {
  handInput.value += "\u06AF";
});

// Control buttons
document.getElementById("reset_btn").addEventListener("click", function () {
  result.innerHTML = "The total <em>abjad</em> value of \u2026 is \u2026";
});
document.getElementById("space_btn").addEventListener("click", function () {
  handInput.value += " ";
});
document.getElementById("back_btn").addEventListener("click", function () {
  handInput.value = handInput.value.slice(0, -1);
});

// Function to get abjad value
function getAbjad() {
  // Take the user's input and set two new versions of it: one has all whitespace stripped for calculating the abjad value; the other is cleaned up for display to the user
  const inputForCalc = handInput.value.replace(/\s+/g, "");
  const inputForDisplay = handInput.value.replace(/\s+/g, " ").trim();

  // See whether the user has checked the optional checkboxes in the form
  const hamzahCheckbox = document.getElementById("hamzah_check");
  const maghribiCheckbox = document.getElementById("maghribi_check");

  // Define a total to keep track of the abjad value, and an iterator
  let total = 0;
  let i = 0;

  // Set up the text of the result pane, which will need only to have the total added to it
  result.innerHTML =
    "The total <em>abjad</em> value of <span class='replay_input'>\u00AB" +
    inputForDisplay +
    "\u00BB</span> is";

  // Here we go! This runs through the cleaned input, one character at a time, checking for matches with Arabic-script letters and adding the relevant abjad values to the total
  for (i = 0; i < inputForCalc.length; i += 1) {
    if (
      "\u0627" === inputForCalc.charAt(i) ||
      "\u0622" === inputForCalc.charAt(i) ||
      "\u0623" === inputForCalc.charAt(i) ||
      "\u0625" === inputForCalc.charAt(i) ||
      "\u0671" === inputForCalc.charAt(i)
    ) {
      total += 1;
    } else if ("\u0621" === inputForCalc.charAt(i)) {
      if (hamzahCheckbox.checked) {
        total = total;
      } else {
        total += 1;
      }
    } else if (
      "\u0628" === inputForCalc.charAt(i) ||
      "\u067E" === inputForCalc.charAt(i)
    ) {
      total += 2;
    } else if (
      "\u062C" === inputForCalc.charAt(i) ||
      "\u0686" === inputForCalc.charAt(i)
    ) {
      total += 3;
    } else if ("\u062F" === inputForCalc.charAt(i)) {
      total += 4;
    } else if (
      "\u0647" === inputForCalc.charAt(i) ||
      "\u0629" === inputForCalc.charAt(i) ||
      "\u06C0" === inputForCalc.charAt(i)
    ) {
      total += 5;
    } else if (
      "\u0648" === inputForCalc.charAt(i) ||
      "\u0624" === inputForCalc.charAt(i)
    ) {
      total += 6;
    } else if (
      "\u0632" === inputForCalc.charAt(i) ||
      "\u0698" === inputForCalc.charAt(i)
    ) {
      total += 7;
    } else if ("\u062D" === inputForCalc.charAt(i)) {
      total += 8;
    } else if ("\u0637" === inputForCalc.charAt(i)) {
      total += 9;
    } else if (
      "\u06CC" === inputForCalc.charAt(i) ||
      "\u0649" === inputForCalc.charAt(i) ||
      "\u064A" === inputForCalc.charAt(i) ||
      "\u0626" === inputForCalc.charAt(i)
    ) {
      total += 10;
    } else if (
      "\u06A9" === inputForCalc.charAt(i) ||
      "\u06AF" === inputForCalc.charAt(i) ||
      "\u0643" === inputForCalc.charAt(i)
    ) {
      total += 20;
    } else if ("\u0644" === inputForCalc.charAt(i)) {
      total += 30;
    } else if ("\u0645" === inputForCalc.charAt(i)) {
      total += 40;
    } else if ("\u0646" === inputForCalc.charAt(i)) {
      total += 50;
    } else if ("\u0633" === inputForCalc.charAt(i)) {
      if (maghribiCheckbox.checked) {
        total += 300;
      } else {
        total += 60;
      }
    } else if ("\u0639" === inputForCalc.charAt(i)) {
      total += 70;
    } else if ("\u0641" === inputForCalc.charAt(i)) {
      total += 80;
    } else if ("\u0635" === inputForCalc.charAt(i)) {
      if (maghribiCheckbox.checked) {
        total += 60;
      } else {
        total += 90;
      }
    } else if ("\u0642" === inputForCalc.charAt(i)) {
      total += 100;
    } else if ("\u0631" === inputForCalc.charAt(i)) {
      total += 200;
    } else if ("\u0634" === inputForCalc.charAt(i)) {
      if (maghribiCheckbox.checked) {
        total += 1000;
      } else {
        total += 300;
      }
    } else if ("\u062A" === inputForCalc.charAt(i)) {
      total += 400;
    } else if ("\u062B" === inputForCalc.charAt(i)) {
      total += 500;
    } else if ("\u062E" === inputForCalc.charAt(i)) {
      total += 600;
    } else if ("\u0630" === inputForCalc.charAt(i)) {
      total += 700;
    } else if ("\u0636" === inputForCalc.charAt(i)) {
      if (maghribiCheckbox.checked) {
        total += 90;
      } else {
        total += 800;
      }
    } else if ("\u0638" === inputForCalc.charAt(i)) {
      if (maghribiCheckbox.checked) {
        total += 800;
      } else {
        total += 900;
      }
    } else if ("\u063A" === inputForCalc.charAt(i)) {
      if (maghribiCheckbox.checked) {
        total += 900;
      } else {
        total += 1000;
      }
    } else if ("\u200C" === inputForCalc.charAt(i)) {
      total = total;
    } else {
      // If the character wasn't recognized, add an error message
      result.innerHTML =
        "At least one of the characters that you entered was not recognized and has been ignored.<br>That said, the computed <em>abjad</em> value of <span class='replay_input'>\u00AB" +
        inputForDisplay +
        "\u00BB</span> is";
      total = total;
    }
  }

  // Add the final total to the text of the result pane
  result.innerHTML += " " + total + ".";

  // Remove focus from the text entry field upon form submission
  document.getElementById("hand_input").blur();
}
