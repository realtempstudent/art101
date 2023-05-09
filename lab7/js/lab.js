// lab.js - Accepts and processes user input in a certain way.
// Author: Edward Oh
// Date: 5/2/2023

// BONUS REQUIREMENT 5
// this meets the bonus requirement of having window.prompt() happen outside the function and then pass it into the name processing function
function promptinput() {
  return window.prompt("Name input: ");
}

// BONUS REQUIREMENT 2
// this meets the bonus requirement of omitting spaces in the user's input.
function sorter() {
  var userName = promptinput();
  var spacesomitted = userName.split(' ').join('');
  // this is how spaces are omitted, by splitting the input at any point with a space and then rejoining all contents of the array immediately after the splitting at space has been completed.
  // theoretically this could be split into two lines, but I opted for one because I wanted to demonstrate that JavaScript is technically capable of executing code like this in this manner if instructed to.
  console.log(spacesomitted);
  var nameArray = spacesomitted.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);
  return nameArraySort;
}

// BONUS REQUIREMENT 1
// this meets the bonus requirement of combining the capital and lowercase letters
function sorteruppercasetogether() {
  var arraywithcapitals = sorter();
  var capitals = [];
  var indexestocapitalize = [];
  // this code works by creating an array that contains all capital letters found, then turning the array into a string that is a purely lowercase version, and then searching where lowercase versions of the capitals exist, and replacing them with their capital versions until all capitals have completed placement into the string.
  
  // this block searches for and tracks all the capital letters located in the target string.
  for (var i=0; i<arraywithcapitals.length; i++){
    if (/[A-Z]/.test(arraywithcapitals[i])){
      // this line checks to see if the letter at the specified location/index falls within the A-Z range, and if the check is successful, places it inside the "capitals" array.
      capitals.push(arraywithcapitals[i]);
    }
  } 
  
  // this block turns the entire target array into a string that is a purely lowercase version, sorts it, and then turns it into a string.
  var arraywithnocapitals = arraywithcapitals;
  for (var i=0; i<arraywithcapitals.length; i++){
    arraywithnocapitals[i] = arraywithnocapitals[i].toLowerCase();
  } 
  arraywithnocapitals.sort();
  
  // stringwithcapitals = arraywithcapitals.sort().join('');
  // stringwithnocapitals = stringwithcapitals.toLowerCase();

  console.log(arraywithnocapitals);
  console.log(capitals);

  // this block searches for letters that are lowercase versions of the capitals that have been logged and converts them until all capitals logged have complete representation.
  var arraywithsortedcapitals = arraywithnocapitals;
  for (var i=0; i<arraywithnocapitals.length; i++){
    if (capitals.length > 0){
      if (capitals[0].toLowerCase() == arraywithnocapitals[i]){
        arraywithsortedcapitals[i] = arraywithnocapitals[i].toUpperCase();
        capitals.splice(0,1);
      }
    }
  }

  // this line turns the array that has been sorted such that capital and lowercase latters have been sorted together into a string
  return arraywithsortedcapitals.join('');
}

document.writeln("Name after processing: ",
  sorteruppercasetogether(), "</br>");