var apiKey = "cc6e371f3d60a75d44278351a03a214b";
var city = document.getElementById("city");

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
            document.querySelector("#currentWeather").textContent =
              `${currentData.name} Today: Temperature: ${currentData.main.temp} F Humidity: ${currentData.main.humidity}%, Wind Speed: ${currentData.wind.speed} mph`;

            var cityLat = currentData.coord.lat;
            var cityLon = currentData.coord.lon;

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
                }).then((forecastData) => {
                    console.log(forecastData);
                    document.querySelector("#foreCast2").innerHTML = "HALP!!!";
                    document.querySelector("#foreCast3").innerHTML = "HALP!!!";
                    document.querySelector("#foreCast4").innerHTML = "HALP!!!";
                    document.querySelector("#foreCast5").innerHTML = "HALP!!!";

                });
        });
};
