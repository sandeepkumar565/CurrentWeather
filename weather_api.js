let b = document.getElementById("button")
b.onclick = weatherInfo

// Automatic weather updates
let cityarr = ["New Delhi", "Dubai", "Istanbul", "Paris", "London", "New York", "Tokyo", "Sydney", "Shanghai", "Singapore"]
let interval = setInterval(weatherAuto, 1000)

function weatherAuto() {
    let d = new Date()
    let sec = d.getSeconds()
    let city = cityarr[sec % 10]

    let api = "82796fcf91ded29a924e178e5c16a341"
    let url = 'http://api.openweathermap.org/data/2.5/weather?' + 'q=' + city + '&APPID=' + api + "&units=metric"

    fetch(url).then(function(resp) {
        return resp.json()
    }).then(function(data) {
        console.log(data)

        let weather = data
        let h11 = document.getElementById("h11")
        let mausam1 = document.getElementById("mausam1")

        h11.innerHTML = "Weather updates of   " + city

        mausam1.innerHTML =
            "Temperature : " + weather.main.temp + " °C<br>" + "Humidity : " + weather.main.humidity + " %<br>" +
            "Pressure : " + weather.main.pressure + " hpa<br>" + "Wind Speed : " + weather.wind.speed + " m/s";

    }).catch()
}

// weather update of desired city
function weatherInfo() {
    const result = document.getElementById("result")
    result.style.background = "#00ff00"
    let city = document.getElementById("city").value

    let api = "82796fcf91ded29a924e178e5c16a341"
    let url = 'http://api.openweathermap.org/data/2.5/weather?' + 'q=' + city + '&APPID=' + api + "&units=metric"

    fetch(url).then(function(resp) {
        return resp.json()
    }).then(function(data) {

        let weather = data
        document.getElementById("h1").innerHTML = "Weather updates of the " + city
        document.getElementById("mausam").innerHTML =
            "Temperature : " + weather.main.temp + "°C<br>" + "Humidity : " + weather.main.humidity + "%<br>" +
            "Pressure : " + weather.main.pressure + " hpa<br>" + "Wind Speed : " + weather.wind.speed + " m/s";; //degree = alt+num(0176)

    }).catch()
}

//let city = window.prompt("Enter city : ");

//console.log(weather.main.temp)