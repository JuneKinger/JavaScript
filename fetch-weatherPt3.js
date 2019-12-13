<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Launch Status</title>
    <script>
      window.addEventListener("load", function() {
        // the fetch command sends a request to the URL.
        // When the API returns a response, the then method calls the anonymous handler function and passes in the response object
          fetch("https://handlers.education.launchcode.org/static/weather.json").then( function(response) {
              // Access the JSON in the response
              // the handler function tries to retrieve the JSON data from the response object. When this is successful, the anonymous function(json) gets called.
              response.json().then( function(json) {
                // the div object is defined and linked to the HTML element with the id weather-conditions
                const div = document.getElementById('weather-conditions');
                // the innerHTML property of the div object is set to be the HTML elements
                // The HTML gets filled in using weather data stored in the json object.
                div.innerHTML = `
                  <ul>
                    <li>Temp ${json.temp}</li>
                    <li>Wind Speed ${json.windSpeed}</li>
                    <li>Status ${json.status}</li>
                    <li>Chance of Precip ${json.chanceOfPrecipitation}</li>
                  </ul>
                `;
              });
          });
      });
    </script>
  </head>
  <body>
        <h1>Launch Status</h1>
        Weather Conditions
        <div id="weather-conditions">
          <!-- the HTML defined gets added to the div element
          Opening the developer tools on the web page shows the added HTML under Inspector: -->
          <!-- TODO: dynamically add html about weather using data from API -->
        </div>
  </body>
</html>
