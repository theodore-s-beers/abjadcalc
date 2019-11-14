"use strict";

// Define a const for the result pane
const result = document.getElementById("result");

// Main function
function get_abjad() {
  // Take the user's input
  const get_input = document.getElementById("abjad_text") as HTMLInputElement;

  // Set two new versions of that input: one has all whitespace stripped for calculating the abjad value; the other is cleaned up for display to the user
  const input_for_calc = get_input.value.replace(/\s+/g, "");
  const input_for_display = get_input.value.replace(/\s+/g, " ").trim();

  // See whether the user has checked the optional checkboxes in the form
  const hamzah_checkbox = document.getElementById(
    "hamzah_check"
  ) as HTMLInputElement;
  const maghribi_checkbox = document.getElementById(
    "maghribi_check"
  ) as HTMLInputElement;

  // Define a total to keep track of the abjad value, and an iterator
  let total = 0;
  let i = 0;

  // Set up the text of the result pane, which will need only to have the total added to it
  result.innerHTML =
    "The total <em>abjad</em> value of <span class='replay_input'>\u00AB" +
    input_for_display +
    "\u00BB</span> is";

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
      // If the character wasn't recognized, add an error message
      result.innerHTML =
        "At least one of the characters that you entered was not recognized and has been ignored.<br>That said, the computed <em>abjad</em> value of <span class='replay_input'>\u00AB" +
        input_for_display +
        "\u00BB</span> is";
      total = total;
    }
  }

  // Add the final total to the text of the result pane
  result.innerHTML += " " + total + ".";

  // Remove focus from the text entry field upon form submission
  document.getElementById("abjad_text").blur();
}

// When the reset button is clicked, restore the text of the result pane to its default
document.getElementById("reset_button").addEventListener("click", function() {
  result.innerHTML = "The total <em>abjad</em> value of \u2026 is \u2026";
});
