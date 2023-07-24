var apiKey = "cc6e371f3d60a75d44278351a03a214b";
var city = document.getElementById("city");
var cityLat;
var cityLon;
// dayjs.extend(window.dayjs_plugin_utc);
// dayjs.extend(window.dayjs_plugin_timezone);

//event Listener to search city
document.getElementById("search").addEventListener("click", function () {
  searchCurrent(city.value);
});

//function to search by city
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
      ).textContent = `${currentData.name} Today: Temperature: ${currentData.main.temp} F Humidity: ${currentData.main.humidity}%, Wind Speed: ${currentData.wind.speed} mph`;

      cityLat = currentData.coord.lat;
      cityLon = currentData.coord.lon;
      forecastCards(cityLat, cityLon);
    });
}
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
            `${forecastData.list[5].dt_txt}     Temperature: 
        ${forecastData.list[5].main.temp} F Humidity: 
        ${forecastData.list[5].main.humidity}%, Wind Speed: 
        ${forecastData.list[5].wind.speed} mph`;
      document.querySelector("#foreCast3").innerHTML = "HALP!!!";
      document.querySelector("#foreCast4").innerHTML = "HALP!!!";
      document.querySelector("#foreCast5").innerHTML = "HALP!!!";
      //   var startDate = dayjs().add(1, "day").startOf("day").unix();
      //   var endDate = dayjs().add(6, "day").startOf("day").unix();
      //   console.log(startDate);
      //   console.log(endDate);
         for (var i = 0; i < forecastData.list.length; i++) {
             if (forecastData.list[i].dt_txt.indexOf("15:00:00") !== -1) {
               var title = document.createElement //make h5 & create card for date <h5>".addClass("cardTitle")
                 .text(
                   newDate(forecastData.list[i].dt_txt).toLocalDateString()
                 );
              ;
           }
           
         }
    });
}
