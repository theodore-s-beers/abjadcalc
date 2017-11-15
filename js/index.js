// Function to get abjad value
function getAbjad() {
    "use strict";
    var babadook = document.getElementById("handInput").value;
    var slenderman = document.getElementById("handInput").value;
    var slendererman = slenderman.replace(/\s+/g, " ").trim();
    var result = document.getElementById("result");
    var total = 0;
    var i = 0;
    result.innerHTML = "The total <em>abjad</em> value of \u00AB " + slendererman + " \u00BB is";
    babadook = babadook.replace(/\s+/g, "");
    for (i = 0; i < babadook.length; i += 1) {
        if ("\u0627" === babadook.charAt(i) || "\u0622" === babadook.charAt(i) || "\u0623" === babadook.charAt(i) || "\u0625" === babadook.charAt(i) || "\u0671" === babadook.charAt(i)) {
            total += 1;
        } else if ("\u0621" === babadook.charAt(i)) {
            if (document.getElementById("hamzahCheck").checked) {
                total = total;
            } else {
                total += 1;
            }
        } else if ("\u0628" === babadook.charAt(i) || "\u067E" === babadook.charAt(i)) {
            total += 2;
        } else if ("\u062C" === babadook.charAt(i) || "\u0686" === babadook.charAt(i)) {
            total += 3;
        } else if ("\u062F" === babadook.charAt(i)) {
            total += 4;
        } else if ("\u0647" === babadook.charAt(i) || "\u0629" === babadook.charAt(i) || "\u06C0" === babadook.charAt(i)) {
            total += 5;
        } else if ("\u0648" === babadook.charAt(i) || "\u0624" === babadook.charAt(i)) {
            total += 6;
        } else if ("\u0632" === babadook.charAt(i) || "\u0698" === babadook.charAt(i)) {
            total += 7;
        } else if ("\u062D" === babadook.charAt(i)) {
            total += 8;
        } else if ("\u0637" === babadook.charAt(i)) {
            total += 9;
        } else if ("\u06CC" === babadook.charAt(i) || "\u0649" === babadook.charAt(i) || "\u064A" === babadook.charAt(i) || "\u0626" === babadook.charAt(i)) {
            total += 10;
        } else if ("\u06A9" === babadook.charAt(i) || "\u06AF" === babadook.charAt(i) || "\u0643" === babadook.charAt(i)) {
            total += 20;
        } else if ("\u0644" === babadook.charAt(i)) {
            total += 30;
        } else if ("\u0645" === babadook.charAt(i)) {
            total += 40;
        } else if ("\u0646" === babadook.charAt(i)) {
            total += 50;
        } else if ("\u0633" === babadook.charAt(i)) {
            total += 60;
        } else if ("\u0639" === babadook.charAt(i)) {
            total += 70;
        } else if ("\u0641" === babadook.charAt(i)) {
            total += 80;
        } else if ("\u0635" === babadook.charAt(i)) {
            total += 90;
        } else if ("\u0642" === babadook.charAt(i)) {
            total += 100;
        } else if ("\u0631" === babadook.charAt(i)) {
            total += 200;
        } else if ("\u0634" === babadook.charAt(i)) {
            total += 300;
        } else if ("\u062A" === babadook.charAt(i)) {
            total += 400;
        } else if ("\u062B" === babadook.charAt(i)) {
            total += 500;
        } else if ("\u062E" === babadook.charAt(i)) {
            total += 600;
        } else if ("\u0630" === babadook.charAt(i)) {
            total += 700;
        } else if ("\u0636" === babadook.charAt(i)) {
            total += 800;
        } else if ("\u0638" === babadook.charAt(i)) {
            total += 900;
        } else if ("\u063A" === babadook.charAt(i)) {
            total += 1e3;
        } else if ("\u200C" === babadook.charAt(i)) {
            total = total;
        } else {
            result.innerHTML = "At least one of the characters that you entered was not recognized and has been ignored.<br>That said, the computed <em>abjad</em> value of \u00AB " + slendererman + " \u00BB is";
            total = total;
        }
    }
    result.innerHTML += " " + total + ".";
    document.getElementById("handInput").blur();
}

// Reset button
document.getElementById("resetButton").addEventListener("click", function resetForm() {
    "use strict";
    var pennywise = document.getElementById("result");
    pennywise.innerHTML = "The total <em>abjad</em> value of \u2026 is \u2026";
});