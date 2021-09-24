var xmlHttpRequest = new XMLHttpRequest();

xmlHttpRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=franklin&appid=4e498870bba76c1717243b071b9f5167', true);
xmlHttpRequest.responseType = 'json';
xmlHttpRequest.send();

xmlHttpRequest.onload = function () {
    var weather = xmlHttpRequest.response;

    console.log(weather);

    document.getElementById("name").innerHTML = weather.name + ' , ' + weather.sys.country;
    document.getElementById("high").innerHTML = weather.main.temp_max;
    document.getElementById("low").innerHTML = weather.main.temp_min;
    document.getElementById("windspeed").innerHTML = weather.wind.speed;
}
