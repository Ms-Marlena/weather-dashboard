var apiKey = "cc6e371f3d60a75d44278351a03a214b";
var city = document.getElementById("city");
var cityLat;
var cityLon;

//event Listener to search city
document.getElementById("search").addEventListener("click", function () {
  searchCurrent(city.value);
});

//function to search and display current weather by city
function searchCurrent(city) {
  var requestCurrentURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=imperial";

  fetch(requestCurrentURL)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((currentData) => {
      console.log(currentData.coord.lat);
      console.log(currentData.coord.lon);
      document.querySelector(
        "#currentWeather"
      ).textContent =
        ` ${currentData.name} Today 
      Temperature: ${currentData.main.temp} F
      Humidity: ${currentData.main.humidity}%
      Wind Speed: ${currentData.wind.speed} mph`;

      cityLat = currentData.coord.lat;
      cityLon = currentData.coord.lon;
      forecastCards(cityLat, cityLon);
    });
}
//function to retrieve and display weather forecast information
function forecastCards(cityLat, cityLon) {
  var requestForecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    cityLat +
    "&lon=" +
    cityLon +
    "&appid=" +
    apiKey +
    "&units=imperial";

    fetch(requestForecastURL)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((forecastData) => {
            console.log(forecastData);
            document.querySelector("#foreCast2").innerHTML =
              `${forecastData.list[8].dt_txt}     
                Temperature: ${forecastData.list[8].main.temp} F     
                Humidity: ${forecastData.list[8].main.humidity}% 
                Wind Speed: ${forecastData.list[8].wind.speed} mph`;
            document.querySelector(
              "#foreCast3"
            ).innerHTML = `${forecastData.list[16].dt_txt} 
            Temperature: ${forecastData.list[16].main.temp} F 
            Humidity: ${forecastData.list[16].main.humidity}% 
            Wind Speed: ${forecastData.list[16].wind.speed} mph`;
            document.querySelector(
              "#foreCast4"
            ).innerHTML = `${forecastData.list[24].dt_txt} 
            Temperature: ${forecastData.list[24].main.temp} F 
            Humidity: ${forecastData.list[24].main.humidity}%
             Wind Speed: ${forecastData.list[24].wind.speed} mph`;
            document.querySelector(
              "#foreCast5"
            ).innerHTML = `${forecastData.list[32].dt_txt} 
            Temperature: ${forecastData.list[32].main.temp} F 
            Humidity: ${forecastData.list[32].main.humidity}% 
            Wind Speed: ${forecastData.list[32].wind.speed} mph`;
                }
            ) 
        };
