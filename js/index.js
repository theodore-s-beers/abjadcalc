function getAbjad() {
  var babadook = document.getElementById("abjadText").value;
  var slenderman = document.getElementById("abjadText").value;
  var slendererman = slenderman.trim();
  var result = document.getElementById("result");
  result.textContent = "The total value of « " + slendererman + " » is";
  var total = 0;
  var newline = "\r\n";
  babadook = babadook.replace(/\s+/g, "");
  for (i = 0; i < babadook.length; i++) {
    if (
      babadook.charAt(i) == "ا" ||
      babadook.charAt(i) == "ء" ||
      babadook.charAt(i) == "آ" ||
      babadook.charAt(i) == "أ" ||
      babadook.charAt(i) == "ؤ" ||
      babadook.charAt(i) == "إ" ||
      babadook.charAt(i) == "ئ"
    ) {
      total = total + 1;
    } else if (babadook.charAt(i) == "ب" || babadook.charAt(i) == "پ") {
      total = total + 2;
    } else if (babadook.charAt(i) == "ج" || babadook.charAt(i) == "چ") {
      total = total + 3;
    } else if (babadook.charAt(i) == "د") {
      total = total + 4;
    } else if (babadook.charAt(i) == "ه" || babadook.charAt(i) == "ة") {
      total = total + 5;
    } else if (babadook.charAt(i) == "و") {
      total = total + 6;
    } else if (babadook.charAt(i) == "ز" || babadook.charAt(i) == "ژ") {
      total = total + 7;
    } else if (babadook.charAt(i) == "ح") {
      total = total + 8;
    } else if (babadook.charAt(i) == "ط") {
      total = total + 9;
    } else if (
      babadook.charAt(i) == "ی" ||
      babadook.charAt(i) == "ى" ||
      babadook.charAt(i) == "ي"
    ) {
      total = total + 10;
    } else if (
      babadook.charAt(i) == "ک" ||
      babadook.charAt(i) == "گ" ||
      babadook.charAt(i) == "ك"
    ) {
      total = total + 20;
    } else if (babadook.charAt(i) == "ل") {
      total = total + 30;
    } else if (babadook.charAt(i) == "م") {
      total = total + 40;
    } else if (babadook.charAt(i) == "ن") {
      total = total + 50;
    } else if (babadook.charAt(i) == "س") {
      total = total + 60;
    } else if (babadook.charAt(i) == "ع") {
      total = total + 70;
    } else if (babadook.charAt(i) == "ف") {
      total = total + 80;
    } else if (babadook.charAt(i) == "ص") {
      total = total + 90;
    } else if (babadook.charAt(i) == "ق") {
      total = total + 100;
    } else if (babadook.charAt(i) == "ر") {
      total = total + 200;
    } else if (babadook.charAt(i) == "ش") {
      total = total + 300;
    } else if (babadook.charAt(i) == "ت") {
      total = total + 400;
    } else if (babadook.charAt(i) == "ث") {
      total = total + 500;
    } else if (babadook.charAt(i) == "خ") {
      total = total + 600;
    } else if (babadook.charAt(i) == "ذ") {
      total = total + 700;
    } else if (babadook.charAt(i) == "ض") {
      total = total + 800;
    } else if (babadook.charAt(i) == "ظ") {
      total = total + 900;
    } else if (babadook.charAt(i) == "غ") {
      total = total + 1000;
    } else {
      result.textContent =
        "At least one of the characters that you entered was not recognized and has been ignored." +
        newline +
        "That said, the computed value of « " +
        slendererman +
        " » is";
      total = total;
    }
  }
  result.textContent += " " + total + ".";
}

var subButton = document.getElementById("subButton");
subButton.addEventListener("click", getAbjad);

var go = document.getElementById("subButton");
var txt = document.getElementById("abjadText");
txt.addEventListener("keypress", function(e) {
  if (event.keyCode === 13) {
    go.click();
    e.preventDefault();
  }
});