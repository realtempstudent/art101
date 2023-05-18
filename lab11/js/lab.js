// lab.js - Accepts and processes user input in a certain way by some means of computation.
// Author: Edward Oh
// Date: 5/16/2023

var presser = document.createElement("button");
presser.innerHTML = "Toggle special";

var presser2 = document.createElement("button");
presser2.innerHTML = "Toggle special";

var presser3 = document.createElement("button");
presser3.innerHTML = "Toggle special";

$("#challenge").append(presser);
$("#problems").append(presser2);
$("#results").append(presser3);

$(presser).click(function(){
    console.log($("#my-input").val);
    $("#challenge").toggleClass("special");
});

$(presser2).click(function(){
    console.log($("#my-input").val);
    $("#problems").toggleClass("special");
});

$(presser3).click(function(){
    console.log($("#my-input").val);
    $("#results").toggleClass("special");
});