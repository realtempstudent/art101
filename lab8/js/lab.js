// lab.js - Accepts and processes user input in a certain way by some means of computation.
// Author: Edward Oh
// Date: 5/6/2023

function addone(b){
  var outp = b + 1;
  return outp;
}

console.log(addone(7));

array = [2,3,5,8,13];
console.log(array.map(addone));

console.log(array.map(function(b) {
  var outp = b + 2;
  return outp;
}))

document.writeln("Original array: " + array);
document.write("<br>");
document.writeln("Array after one is added to all of their elements: " + array.map(addone));
document.write("<br>");
document.writeln("Array after two is added to all of their elements: " + array.map(function(b) {
  var outp = b + 2;
  return outp;
}));