// lab.js - Lists the details of the means of transport I have coded.
// Author: Edward Oh
// Date: April 30, 2023

// Define Variables
myTransport = ["Toyota Sienna", "feet", "bicycle"]

myMainRide = {
    make: "Toyota",
    model : "Sienna",
    color : "White",
    year : "1997",
    age : function() {
        return 2023 - this.year;
    }
}

document.writeln("My means of movement: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");