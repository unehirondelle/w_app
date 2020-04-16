const apiKey = "e65f4e03947412b5bcda8666502faba3";
let cityName;
$("#search-button").on("click", function () {
    cityName = $("#search-value").val();
    console.log("The city is: ", cityName);
    console.log("link:", "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey);
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey,
        type: "GET",
        dataType: "json",
        success: function (response) {
            console.log("response:", response);
            let city = $("<h1></h1>").text("The weather in " + response.city.name + ":");
            let date = $("<p></p>").text("Today is " + response.list[0].dt_txt);
            let weatherIcon = $("<img>").attr("src", "response.list[0].weather[0].icon");
            let temperature = $("<p></p>").text("Temperature: " + response.list[0].main.temp);
            let humidity = $("<p></p>").text("Humidity: " + response.list[0].main.humidity);
            let windSpeed = $("<p></p>").text("Humidity: " + response.list[0].wind.speed);
        }
    });
});


