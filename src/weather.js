async function getWeather(location, units='metric') {
    const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4f38c591e88bdeeb84cf6cf7d72803f9&units=${units}`, {mode:'cors'})
    const weatherData = await weatherResponse.json();
    
    return weatherData; 
}

export { getWeather }

