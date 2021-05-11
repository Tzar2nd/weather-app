const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
getWeather('Milan');

searchButton.addEventListener('click', e => getWeather(searchInput.value));

const celsiusToFarenheit = celsius => (celsius * 9/5) + 32;

async function getWeather(place) {
    console.log(place);
    const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=4f38c591e88bdeeb84cf6cf7d72803f9&units=metric`, {mode:'cors'})
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    console.log(weatherData.main.temp);

    displayData(weatherData);
}

function displayData(weatherData) {
    const city = document.getElementById('city'); 
    const climate = document.getElementById('climate'); 
    const temp = document.getElementById('temp'); 
    const high = document.getElementById('high'); 
    const low = document.getElementById('low'); 
    const feelsLike = document.getElementById('feels-like'); 
    const humidity = document.getElementById('humidity');

    city.textContent = weatherData.name;
    climate.textContent = weatherData.weather[0].description;
    temp.textContent = `Temp: ${Math.round(weatherData.main.temp)}`;
    high.textContent = `High: ${Math.round(weatherData.main.temp_max)}`;
    low.textContent = `Low: ${Math.round(weatherData.main.temp_min)}`;
    feelsLike.textContent = `Feels like ${Math.round(weatherData.main.feels_like)}`;
    humidity.textContent = weatherData.main.humidity + "%";

}



