var searchInput = document.getElementById('searchInput');
var todayName = document.getElementById('todayName');
var todayMonth = document.getElementById('todayMonth');
var todayNumber = document.getElementById('todayNumber');
var cityName = document.getElementById('cityName');
var cityTemp = document.getElementById('cityTemp');
var weatherConditionImg = document.getElementById('weatherConditionImg');
var weatherCondition = document.getElementById('weatherCondition');
var humidity = document.getElementById('humidity');
var wind = document.getElementById('wind');
var windDirection = document.getElementById('windDirection');
var tomorrowDay = document.getElementById('tomorrowDay');
var tomorrowIcon = document.getElementById('tomorrowIcon')
var maxTemp = document.getElementById('maxTemp');
var minTemp = document.getElementById('minTemp');
var tomorrowCondition = document.getElementById('tomorrowCondition');
var afterTomorrowDay = document.getElementById('afterTomorrowDay');
var AftertomorrowIcon = document.getElementById('AftertomorrowIcon')
var afterTomorrowMaxTemp = document.getElementById('afterTomorrowMaxTemp');
var afterTomorrowMinTemp = document.getElementById('afterTomorrowMinTemp');
var afterTomorrowCondition = document.getElementById('afterTomorrowCondition');

async function weatherData(city) {
    var response = await (await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ea7787fb0d3849b188e61225240701&q=${city}&days=3`)).json();
    data = response;
    displayData(data)
}

function displayData(data) {
    var todayDate = new Date()
    todayName.innerHTML = todayDate.toLocaleDateString('en-US' , {weekday:'long'})
    todayMonth.innerHTML = todayDate.toLocaleDateString('en-US' , {month: 'long'})
    todayNumber.innerHTML = todayDate.getDate()
    cityName.innerHTML = data.location.name
    cityTemp.innerHTML = data.current.temp_c + '°C'
    weatherConditionImg.setAttribute("src", 'https:' + data.current.condition.icon);
    weatherCondition.innerHTML = data.current.condition.text
    humidity.innerHTML = data.current.humidity + '%'
    wind.innerHTML = data.current.wind_kph + 'km/h'
    windDirection.innerHTML = data.current.wind_dir
    var tomorrowDate = new Date(data.forecast.forecastday[1].date)
    tomorrowDay.innerHTML = tomorrowDate.toLocaleDateString('en-US' , {weekday: 'long'})
    tomorrowIcon.setAttribute('src' , 'http:' + data.forecast.forecastday[1].day.condition.icon)
    maxTemp.innerHTML = data.forecast.forecastday[1].day.maxtemp_c + '°C'
    minTemp.innerHTML = data.forecast.forecastday[1].day.mintemp_c + '°C'
    tomorrowCondition.innerHTML = data.forecast.forecastday[1].day.condition.text
    var afterTomorrowDate = new Date(data.forecast.forecastday[2].date)
    afterTomorrowDay.innerHTML = afterTomorrowDate.toLocaleDateString('en-US' , {weekday: 'long'})
    AftertomorrowIcon.setAttribute('src' , 'https:' + data.forecast.forecastday[2].day.condition.icon)
    afterTomorrowMaxTemp.innerHTML = data.forecast.forecastday[2].day.maxtemp_c + '°C'
    afterTomorrowMinTemp.innerHTML = data.forecast.forecastday[2].day.mintemp_c + '°C'
    afterTomorrowCondition.innerHTML = data.forecast.forecastday[2].day.condition.text
}

searchInput.addEventListener('input' , function () {
    weatherData(searchInput.value);
})

weatherData('london')



