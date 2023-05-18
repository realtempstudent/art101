// lab.js - Accepts and processes user input in a certain way by some means of computation.
// Author: Edward Oh
// Date: 5/8/2023

var button = document.getElementById("my-button");
button.addEventListener("click", function() {
    input = document.getElementById("my-input").value;
    console.log("the input provided: ", input);
    afterprocessed = sorter(input);
    console.log("the input processed: ", afterprocessed);

    // this section takes the processed input and then inserts it into the display.
    var outputportion = document.getElementById("output");
    var beingputted = document.createElement("p");
    beingputted.innerHTML = "Post processed input: " + afterprocessed;
    outputportion.appendChild(beingputted);
});

function sorter(inp) {
    var userName = inp;
    var spacesomitted = userName.split(' ').join('');
    // this is how spaces are omitted, by splitting the input at any point with a space and then rejoining all contents of the array immediately after the splitting at space has been completed.
    // theoretically this could be split into two lines, but I opted for one because I wanted to demonstrate that JavaScript is technically capable of executing code like this in this manner if instructed to.
    console.log(spacesomitted);
    var nameArray = spacesomitted.split('');
    console.log("nameArray =", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort = ", nameArraySort);
    return nameArraySort.join('');
}