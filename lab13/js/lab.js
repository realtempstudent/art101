// lab.js - Accepts and processes user input in a certain way by some means of computation.
// Author: Edward Oh
// Date: 5/23/2023

function FizzBuzz() {
    var outp = "";
    for (var i=1; i<201; i++) {
        outp += i + " ";
        var exclaim = false;
        if (i % 3 == 0) {
            outp += "Fizz";
            exclaim = true;
        }
        if (i % 5 == 0) {
            outp += "Buzz";
            exclaim = true;
        }
        if (i % 7 == 0) {
            outp += "Pop";
            exclaim = true;
        }
        if (exclaim) {
            outp += "!";
        }
        outp += "<br>";
    }
    return outp;
}

document.getElementById("output").innerHTML = FizzBuzz();
