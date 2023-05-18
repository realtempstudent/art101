// lab.js - Gets, creates, and modifies elements of the HTML document to modify output.
// Author: Edward Oh
// Date: 5/8/2023

var outputEl = document.getElementById("output");
var new1El = document.createElement("p");

new1El.innerHTML = "This is part 1 of the new output.";

var new2El = document.createElement("p");

new2El.innerHTML = "This is part 2 of the new output.";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

outputEl.style.color = "magenta";
outputEl.style.fontSize = "30pt";