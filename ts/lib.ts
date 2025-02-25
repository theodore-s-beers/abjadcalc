function getAbjad(
  input: string,
  maghribiOrder: boolean,
  ignoreHamzah: boolean,
): [number, boolean] {
  // Strip whitespace from input
  const inputCleaned = input.replace(/\s+/g, "");

  // Define a total to keep track of the abjad value
  let total = 0;

  let unrecognizedChars = false;

  // Here we go! Run through the cleaned input, one character at a time
  // Check for matches with Arabic-script letters
  // Add relevant abjad values to the total
  for (let i = 0; i < inputCleaned.length; i += 1) {
    if (
      inputCleaned.charAt(i) === "ا" ||
      inputCleaned.charAt(i) === "آ" ||
      inputCleaned.charAt(i) === "أ" ||
      inputCleaned.charAt(i) === "إ" ||
      inputCleaned.charAt(i) === "ٱ"
    ) {
      total += 1;
    } else if (inputCleaned.charAt(i) === "ء") {
      if (ignoreHamzah) {
        continue;
      } else {
        total += 1;
      }
    } else if (
      inputCleaned.charAt(i) === "ب" ||
      inputCleaned.charAt(i) === "پ"
    ) {
      total += 2;
    } else if (
      inputCleaned.charAt(i) === "ج" ||
      inputCleaned.charAt(i) === "چ"
    ) {
      total += 3;
    } else if (inputCleaned.charAt(i) === "د") {
      total += 4;
    } else if (
      inputCleaned.charAt(i) === "ه" ||
      inputCleaned.charAt(i) === "ة" ||
      inputCleaned.charAt(i) === "ۀ" ||
      inputCleaned.charAt(i) === "ہ" // U+06C1
    ) {
      total += 5;
    } else if (
      inputCleaned.charAt(i) === "و" ||
      inputCleaned.charAt(i) === "ؤ"
    ) {
      total += 6;
    } else if (
      inputCleaned.charAt(i) === "ز" ||
      inputCleaned.charAt(i) === "ژ"
    ) {
      total += 7;
    } else if (inputCleaned.charAt(i) === "ح") {
      total += 8;
    } else if (inputCleaned.charAt(i) === "ط") {
      total += 9;
    } else if (
      inputCleaned.charAt(i) === "ی" ||
      inputCleaned.charAt(i) === "ى" ||
      inputCleaned.charAt(i) === "ي" ||
      inputCleaned.charAt(i) === "ئ"
    ) {
      total += 10;
    } else if (
      inputCleaned.charAt(i) === "ک" ||
      inputCleaned.charAt(i) === "گ" ||
      inputCleaned.charAt(i) === "ك"
    ) {
      total += 20;
    } else if (inputCleaned.charAt(i) === "ل") {
      total += 30;
    } else if (inputCleaned.charAt(i) === "م") {
      total += 40;
    } else if (inputCleaned.charAt(i) === "ن") {
      total += 50;
    } else if (inputCleaned.charAt(i) === "س") {
      if (maghribiOrder) {
        total += 300;
      } else {
        total += 60;
      }
    } else if (inputCleaned.charAt(i) === "ع") {
      total += 70;
    } else if (inputCleaned.charAt(i) === "ف") {
      total += 80;
    } else if (inputCleaned.charAt(i) === "ص") {
      if (maghribiOrder) {
        total += 60;
      } else {
        total += 90;
      }
    } else if (inputCleaned.charAt(i) === "ق") {
      total += 100;
    } else if (inputCleaned.charAt(i) === "ر") {
      total += 200;
    } else if (inputCleaned.charAt(i) === "ش") {
      if (maghribiOrder) {
        total += 1000;
      } else {
        total += 300;
      }
    } else if (inputCleaned.charAt(i) === "ت") {
      total += 400;
    } else if (inputCleaned.charAt(i) === "ث") {
      total += 500;
    } else if (inputCleaned.charAt(i) === "خ") {
      total += 600;
    } else if (inputCleaned.charAt(i) === "ذ") {
      total += 700;
    } else if (inputCleaned.charAt(i) === "ض") {
      if (maghribiOrder) {
        total += 90;
      } else {
        total += 800;
      }
    } else if (inputCleaned.charAt(i) === "ظ") {
      if (maghribiOrder) {
        total += 800;
      } else {
        total += 900;
      }
    } else if (inputCleaned.charAt(i) === "غ") {
      if (maghribiOrder) {
        total += 900;
      } else {
        total += 1000;
      }
    } else if (inputCleaned.charAt(i) === "\u200C") {
      continue;
    } else {
      // If the character wasn't recognized, add an error message
      // Need to reimplement this somehow; set a flag?
      unrecognizedChars = true;
      continue;
    }
  }

  return [total, unrecognizedChars];
}

export function getResult(
  inputField: HTMLInputElement,
  resultField: HTMLElement,
  maghribiCheckbox: HTMLInputElement,
  hamzahCheckbox: HTMLInputElement,
) {
  const input = inputField.value;
  const maghribiOrder = maghribiCheckbox.checked;
  const ignoreHamzah = hamzahCheckbox.checked;

  const [total, unrecognizedChars] = getAbjad(
    input,
    maghribiOrder,
    ignoreHamzah,
  );

  const inputForDisplay = input.replace(/\s+/g, " ").trim();

  let resultText = unrecognizedChars
    ? "At least one of the characters entered was not recognized and has been ignored.<br>That said, the computed <em>abjad</em> value of <span class='replay-input' dir='rtl' lang='ar'>«" +
      inputForDisplay +
      "»</span> is"
    : "The total <em>abjad</em> value of <span class='replay-input' dir='rtl' lang='ar'>«" +
      inputForDisplay +
      "»</span> is";

  resultText += " " + total + ".";

  resultField.innerHTML = resultText;
  inputField.blur();
}
