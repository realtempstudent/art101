// lab.js - Accepts and processes user input in a certain way by some means of computation.
// Author: Edward Oh
// Date: 5/19/2023

function sortingHat(str) {
    length = str.length;
    mod = length % 4;
    if (mod == 0) {
        return "Gryffindor";
    }
    else if (mod == 1) {
        return "Ravenclaw";
    }
    else if (mod == 2) {
        return "Slytherin";
    }
    else {
        return "Hufflepuff";
    }
}

var presser = document.getElementById("button");
presser.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    result = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = result;
})