import * as axios from 'axios';

const instance = axios.create({
    baseURL:"http://api.openweathermap.org/data/2.5/"
})

const API_KEY = 'f37933e3e4d8fafe41b8ac27a02772ab';

export const WeatherApi = {
    getWeatherByCord(lat, lon){
        return instance.get(`weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${API_KEY}`).then(res => res.data);
    },
    getWeatherByCity(city){
        return instance.get(`weather?q=${city}&lang=ru&units=metric&appid=${API_KEY}`).then(res => res.data);
        
    }
}