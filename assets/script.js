var apiKey = "212be1e5713240df908c291b8fbba3f8";
var citySta te = document.getElementById("cityState");

//event Listener to search city
document.getElementById("search").addEventListener("click", function () {
    search(cityState.value);

})

//function to search by city
function search(city) {
    var requestURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey +
      "&units=imperial";
    
    fetch(requestURL)
        .then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data);
    })
}