$(document).ready(function () {
    const apiKey = "da65dfbfee5aef98c6b7b15a6564af81";
    let cityName;
    $("#search-button").on("click", function () {
        cityName = $("#search-value").val();
        console.log("The city is: ", cityName);
        console.log("link:", "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey);
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey,
            type: "GET",
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    });

})