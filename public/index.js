let b = document.getElementById("button");
b.onclick = weatherInfo;

// Automatic weather updates
let cityarr = ["New Delhi", "Dubai", "Istanbul", "Paris", "London", "New York", "Tokyo", "Sydney", "Shanghai", "Singapore"];
let interval = setInterval(weatherAuto, 4000);

let cityIndex = 0;
function weatherAuto() {
    cityIndex = (++cityIndex) % 10

    let api = "82796fcf91ded29a924e178e5c16a341";
    let url = 'https://api.openweathermap.org/data/2.5/weather?' + 'q=' + cityarr[cityIndex]+ '&APPID=' + api + "&units=metric"

    fetch(url).then(function(resp) {
        return resp.json()
    }).then(function(data) {

        let weather = data;
        let h11 = document.getElementById("h11");
        let mausam1 = document.getElementById("mausam1");

        h11.innerHTML = "Weather updates of   " + cityarr[cityIndex];

        mausam1.innerHTML =
            "Temperature : " + weather.main.temp + " °C<br>" + "Humidity : " + weather.main.humidity + " %<br>" +
            "Pressure : " + weather.main.pressure + " hpa<br>" + "Wind Speed : " + weather.wind.speed + " m/s";

    }).catch(err => console.error('an error ocurred', err))
}

// weather update of desired city
var weather, city;
function weatherInfo() {
    const result = document.getElementById("result")
    result.style.background = "#00ff00"
    city = document.getElementById("city").value

    let api = "82796fcf91ded29a924e178e5c16a341"
    let url = 'http://api.openweathermap.org/data/2.5/weather?' + 'q=' + city + '&APPID=' + api + "&units=metric"

    fetch(url).then(function(resp) {
        return resp.json()
    }).then(function(data) {
        weather = data;
        document.getElementById("h1").innerHTML = "Weather updates of the " + city;
        document.getElementById("mausam").innerHTML =
            "Temperature : " + weather.main.temp + "°C<br>" + "Humidity : " + weather.main.humidity + "%<br>" +
            "Pressure : " + weather.main.pressure + " hpa<br>" + "Wind Speed : " + weather.wind.speed + " m/s<br>"; 
            document.getElementById('listen').style.display = 'block';
            //degree = alt+num(0176)

    }).catch();
}

document.getElementById('listen').addEventListener('click', function() {
	if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance();
        msg.text = `Weather updates of ${city}. Temperature is ${weather.main.temp} °C. 
        Wind Speed is ${weather.wind.speed} metre per second. Humidity is ${weather.main.humidity} %`;
        window.speechSynthesis.speak(msg);
        console.log('supported!')

    } else {
      alert('Text-to-speech not supported.');
    }
});