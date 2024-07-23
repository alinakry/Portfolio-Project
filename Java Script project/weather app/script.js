const APIkey = '31f1f6d0c55f76a3f202392e398d448e';

const APIurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


const searchInput = document.querySelector('#search-box input');
const searchBtn = document.querySelector('#search-box button');
const weatherIcon = document.querySelector('.weather-img i');

const weather = document.getElementById('weather');
const error = document.querySelector('.error');

async function checkWeather(city) {
    const response = await fetch(APIurl + city + `&appid=${APIkey}`);
    if (response.status == 404) {
        error.style.display = 'block';
    }

    const data = await response.json();
    console.log(data, 'data');

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&#8451';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if (data.weather[0].value == 'Clear') {
        weatherIcon.className == 'fa-solid fa-sun';
    } else if (data.weather[0].value == 'Rain') {
        weatherIcon.className == 'fa-solid fa-rain'
    } else if (data.weather[0].value == 'Mist') {
        weatherIcon.className == 'fa-solid fa-cloud-mist'
    } else if (data.weather[0].value == 'Drizzle') {
        weatherIcon.className == 'fa-solid fa-drizzle'
    }


    weather.style.display = 'block';
    error.style.display = 'none';
}



searchBtn.addEventListener('click', () => {
    checkWeather(searchInput.value);
    searchInput.value = ' ';
});


searchInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        checkWeather(searchInput.value);
        searchInput.value = ' ';
    }
});







