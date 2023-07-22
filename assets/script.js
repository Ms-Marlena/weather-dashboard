var apiKey = "212be1e5713240df908c291b8fbba3f8";
var city = document.getElementById("city");

//event Listener to search city
document.getElementById("search").addEventListener("click", function () {
    searchCurrent(city.value);
})

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
        }).then((currentData) => {
            console.log(currentData);
            console.log(currentData.coord.lat);
            console.log(currentData.coord.lon);
            console.log(
            currentData.main.temp)
            
        })

    // let cityLat = currentData.coord.lat;
    // let cityLon = currentData.coord.lon;
    // console.log(cityLat, cityLon); 
}

// function displayCurrentWeather(city) {
    
// }


// Getting city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed. Also coordinates to give to the 5-day thing???

// new WeatherData(
//   data.current.temp,
//   weatherToday.weather[0].icon.replace("n", "d"),
//   weatherToday.weather[0].description,
//   data.daily[0].temp.min,
//   data.daily[0].temp.max
// );
//5-day weather search
// function search(city) {
//     var requestFiveDayURL =
//         "https://api.openweathermap.org/data/2.5/forecast? +
//         "lat =" +
//         { lat } +
//         "& lon=" +
//         { lon } +
//         "& appid=" +
//         apiKey +
//         "&units=imperial" +
    
//     fetch(requestFiveDayURL)
//         .then((response) => {
//             console.log(response);
//             return response.json();
//         }).then((forecastData) => {
//             console.log(forecastData);
        
//     })
// }