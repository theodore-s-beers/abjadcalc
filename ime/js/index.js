// Declare global variables
var hand_input = document.getElementById("hand_input");
var result = document.getElementById("result");

// Primary letter buttons row 1
document.getElementById("alif_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0627";
});
document.getElementById("ba_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0628";
});
document.getElementById("jim_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u062C";
});
document.getElementById("dal_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u062F";
});
document.getElementById("ha_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0647";
});
document.getElementById("waw_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0648";
});
document.getElementById("za_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0632";
});

// Primary letter buttons row 2
document.getElementById("5a_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u062D";
});
document.getElementById("taw_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0637";
});
document.getElementById("ya_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u064A";
});
document.getElementById("kaf_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0643";
});
document.getElementById("lam_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0644";
});
document.getElementById("mim_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0645";
});
document.getElementById("nun_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0646";
});

// Primary letter buttons row 3
document.getElementById("sin_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0633";
});
document.getElementById("ayn_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0639";
});
document.getElementById("fa_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0641";
});
document.getElementById("sad_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0635";
});
document.getElementById("qaf_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0642";
});
document.getElementById("ra_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0631";
});
document.getElementById("shin_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0634";
});
document.getElementById("ta_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u062A";
});

// Primary letter buttons row 4
document.getElementById("tha_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u062B";
});
document.getElementById("kha_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u062E";
});
document.getElementById("dhal_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0630";
});
document.getElementById("dad_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0636";
});
document.getElementById("zaw_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0638";
});
document.getElementById("ghayn_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u063A";
});

// Secondary letter buttons
document.getElementById("top_ham_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0623";
});
document
  .getElementById("bottom_ham_btn")
  .addEventListener("click", function f() {
    "use strict";
    hand_input.value += "\u0625";
  });
document.getElementById("maddah_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0622";
});
document.getElementById("hamzah_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0621";
});
document.getElementById("marbutah_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0629";
});
document.getElementById("waw_ham_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0624";
});
document.getElementById("maqsurah_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0649";
});
document.getElementById("ya_ham_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0626";
});

// Persian letter buttons
document.getElementById("pe_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u067E";
});
document.getElementById("che_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0686";
});
document
  .getElementById("ha_izafah_btn")
  .addEventListener("click", function f() {
    "use strict";
    hand_input.value += "\u06C0";
  });
document.getElementById("zhe_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u0698";
});
document.getElementById("pers_ya_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u06CC";
});
document.getElementById("pers_kaf_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u06A9";
});
document.getElementById("gaf_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += "\u06AF";
});

// Control buttons
document.getElementById("reset_btn").addEventListener("click", function f() {
  "use strict";
  result.innerHTML = "The total <em>abjad</em> value of \u2026 is \u2026";
});
document.getElementById("space_btn").addEventListener("click", function f() {
  "use strict";
  hand_input.value += " ";
});
document.getElementById("back_btn").addEventListener("click", function f() {
  "use strict";
  hand_input = hand_input.slice(0, -1);
});

// Function to get abjad value
function get_abjad() {
  "use strict";

  // First we take the user's input
  var get_input = document.getElementById("hand_input");

  // Then we set two new versions of it: one has all whitespace stripped for calculating the abjad value; the other is cleaned up for display to the user
  var input_for_calc = get_input.value.replace(/\s+/g, "");
  var input_for_display = get_input.value.replace(/\s+/g, " ").trim();

  // The following variables represent whether the user has checked the optional checkboxes in the form
  var hamzah_checkbox = document.getElementById("hamzah_check");
  var maghribi_checkbox = document.getElementById("maghribi_check");

  // And here we define a total to keep track of the abjad value, and an iterator
  var total = 0;
  var i = 0;

  // This sets the text in the result pane, which will only need to have the total added to it
  result.innerHTML =
    "The total <em>abjad</em> value of \u00AB " +
    input_for_display +
    " \u00BB is";

  // Here we go! This runs through the cleaned input, one character at a time, checking for matches with Arabic-script letters and adding the relevant abjad values to the total
  for (i = 0; i < input_for_calc.length; i += 1) {
    if (
      "\u0627" === input_for_calc.charAt(i) ||
      "\u0622" === input_for_calc.charAt(i) ||
      "\u0623" === input_for_calc.charAt(i) ||
      "\u0625" === input_for_calc.charAt(i) ||
      "\u0671" === input_for_calc.charAt(i)
    ) {
      total += 1;
    } else if ("\u0621" === input_for_calc.charAt(i)) {
      if (hamzah_checkbox.checked) {
        total = total;
      } else {
        total += 1;
      }
    } else if (
      "\u0628" === input_for_calc.charAt(i) ||
      "\u067E" === input_for_calc.charAt(i)
    ) {
      total += 2;
    } else if (
      "\u062C" === input_for_calc.charAt(i) ||
      "\u0686" === input_for_calc.charAt(i)
    ) {
      total += 3;
    } else if ("\u062F" === input_for_calc.charAt(i)) {
      total += 4;
    } else if (
      "\u0647" === input_for_calc.charAt(i) ||
      "\u0629" === input_for_calc.charAt(i) ||
      "\u06C0" === input_for_calc.charAt(i)
    ) {
      total += 5;
    } else if (
      "\u0648" === input_for_calc.charAt(i) ||
      "\u0624" === input_for_calc.charAt(i)
    ) {
      total += 6;
    } else if (
      "\u0632" === input_for_calc.charAt(i) ||
      "\u0698" === input_for_calc.charAt(i)
    ) {
      total += 7;
    } else if ("\u062D" === input_for_calc.charAt(i)) {
      total += 8;
    } else if ("\u0637" === input_for_calc.charAt(i)) {
      total += 9;
    } else if (
      "\u06CC" === input_for_calc.charAt(i) ||
      "\u0649" === input_for_calc.charAt(i) ||
      "\u064A" === input_for_calc.charAt(i) ||
      "\u0626" === input_for_calc.charAt(i)
    ) {
      total += 10;
    } else if (
      "\u06A9" === input_for_calc.charAt(i) ||
      "\u06AF" === input_for_calc.charAt(i) ||
      "\u0643" === input_for_calc.charAt(i)
    ) {
      total += 20;
    } else if ("\u0644" === input_for_calc.charAt(i)) {
      total += 30;
    } else if ("\u0645" === input_for_calc.charAt(i)) {
      total += 40;
    } else if ("\u0646" === input_for_calc.charAt(i)) {
      total += 50;
    } else if ("\u0633" === input_for_calc.charAt(i)) {
      if (maghribi_checkbox.checked) {
        total += 300;
      } else {
        total += 60;
      }
    } else if ("\u0639" === input_for_calc.charAt(i)) {
      total += 70;
    } else if ("\u0641" === input_for_calc.charAt(i)) {
      total += 80;
    } else if ("\u0635" === input_for_calc.charAt(i)) {
      if (maghribi_checkbox.checked) {
        total += 60;
      } else {
        total += 90;
      }
    } else if ("\u0642" === input_for_calc.charAt(i)) {
      total += 100;
    } else if ("\u0631" === input_for_calc.charAt(i)) {
      total += 200;
    } else if ("\u0634" === input_for_calc.charAt(i)) {
      if (maghribi_checkbox.checked) {
        total += 1000;
      } else {
        total += 300;
      }
    } else if ("\u062A" === input_for_calc.charAt(i)) {
      total += 400;
    } else if ("\u062B" === input_for_calc.charAt(i)) {
      total += 500;
    } else if ("\u062E" === input_for_calc.charAt(i)) {
      total += 600;
    } else if ("\u0630" === input_for_calc.charAt(i)) {
      total += 700;
    } else if ("\u0636" === input_for_calc.charAt(i)) {
      if (maghribi_checkbox.checked) {
        total += 90;
      } else {
        total += 800;
      }
    } else if ("\u0638" === input_for_calc.charAt(i)) {
      if (maghribi_checkbox.checked) {
        total += 800;
      } else {
        total += 900;
      }
    } else if ("\u063A" === input_for_calc.charAt(i)) {
      if (maghribi_checkbox.checked) {
        total += 900;
      } else {
        total += 1000;
      }
    } else if ("\u200C" === input_for_calc.charAt(i)) {
      total = total;
    } else {
      // If the character wasn't recognized, the result pane will show an error message
      result.innerHTML =
        "At least one of the characters that you entered was not recognized and has been ignored.<br>That said, the computed <em>abjad</em> value of \u00AB " +
        input_for_display +
        " \u00BB is";
      total = total;
    }
  }

  // Here the final total is added to the text of the result pane
  result.innerHTML += " " + total + ".";

  // This is to remove focus from the text entry field upon form submission
  document.getElementById("hand_input").blur();
}
