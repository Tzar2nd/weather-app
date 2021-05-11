import { getWeather } from './weather'

export default class DOM {
    static loadPage() {
        this.addEventListeners();
        this.displayTempToday();      
    }

    static addEventListeners() {
        const searchButton = document.getElementById('search-button');
        const inputBox = document.getElementById('search-input');

        searchButton.addEventListener('click', e => this.displayTempToday());
        inputBox.onkeydown = e => { if (e.key === 'Enter') this.displayTempToday()};

    }

    static getLocation() {
        let input = document.getElementById('search-input').value;
        if (input === '') input = 'Milan'; 

        return input; 
    }

    static displayTempToday() {
        const city = document.getElementById('city'); 
        const climate = document.getElementById('climate'); 
        const temp = document.getElementById('temp'); 
        const high = document.getElementById('high'); 
        const low = document.getElementById('low'); 
        const feelsLike = document.getElementById('feels-like'); 
        const humidity = document.getElementById('humidity');
        const location = DOM.getLocation();

        getWeather(location)
            .then(weatherData => { 
                console.log(weatherData);
                city.textContent = weatherData.name;
                climate.textContent = weatherData.weather[0].description;
                temp.textContent = `Temp: ${Math.round(weatherData.main.temp)}`;
                high.textContent = `High: ${Math.round(weatherData.main.temp_max)}`;
                low.textContent = `Low: ${Math.round(weatherData.main.temp_min)}`;
                feelsLike.textContent = `Feels like ${Math.round(weatherData.main.feels_like)}`;
                humidity.textContent = weatherData.main.humidity + "%";
            });
    }

    static displayTempHours() {
        
    }

}