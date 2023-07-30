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
      ).textContent = ` ${currentData.name} Today__ 
      \nTemperature: ${currentData.main.temp} F
      \nHumidity: ${currentData.main.humidity}%
      \nWind Speed: ${currentData.wind.speed} mph`;
      
      document.querySelector("#icon").setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${currentData.weather[0].icon}.png`
        );

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
      // Day 2
      document.querySelector("#d2icon").setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${forecastData.list[8].weather[0].icon}.png`
        );
      document.querySelector(
        "#foreCast2"
      ).innerHTML = `${forecastData.list[8].dt_txt.substring(0, 11)}               
          \nTemperature: ${forecastData.list[8].main.temp} F            
          \nHumidity: ${forecastData.list[8].main.humidity}%          
          \nWind Speed: ${forecastData.list[8].wind.speed} mph`;
      // Day 3
      document.querySelector("#d3icon").setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${forecastData.list[16].weather[0].icon}.png`
        );
      document.querySelector(
        "#foreCast3"
      ).innerHTML = `${forecastData.list[16].dt_txt.substring(0, 11)} 
            \nTemperature: ${forecastData.list[16].main.temp} F
            \nHumidity: ${forecastData.list[16].main.humidity}% 
            \nWind Speed: ${forecastData.list[16].wind.speed} mph`;
        // Day 4
      document.querySelector("#d4icon").setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${forecastData.list[24].weather[0].icon}.png`
        );
      document.querySelector(
        "#foreCast4"
      ).innerHTML = `${forecastData.list[24].dt_txt.substring(0, 11)} 
          \nTemperature: ${forecastData.list[24].main.temp} F 
          \nHumidity: ${forecastData.list[24].main.humidity}%
          \nWind Speed: ${forecastData.list[24].wind.speed} mph`;
      // Day 5
      document
        .querySelector("#d5icon").setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${forecastData.list[32].weather[0].icon}.png`
        );
      document.querySelector(
        "#foreCast5"
      ).innerHTML = `${forecastData.list[32].dt_txt.substring(0, 11)}
            \nTemperature: ${forecastData.list[32].main.temp} F
            \nHumidity: ${forecastData.list[32].main.humidity}% 
            \nWind Speed: ${forecastData.list[32].wind.speed} mph`;
    });
}
