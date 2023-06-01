// lab.js - Accepts and processes user input in a certain way by some means of computation.
// Author: Edward Oh
// Date: 5/30/2023

var presser = document.getElementById("activate");
presser.addEventListener("click", function() {
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://api.chucknorris.io/jokes/random",
        // The data to send (will be converted to a query string)
        data: { 
                // here is where any data required by the api 
                //   goes (check the api docs)
                // id: 123,
                // api_key: "blahblahblah",
              },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            document.getElementById("output").innerHTML = data.value;
            console.log(data);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            document.getElementById("output").innerHTML = "Joke not retrieved.";
            console.log("Error:", textStatus, errorThrown);
        }
    })
})