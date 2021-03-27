import { Container } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { WeatherApi } from './api/api';

import './App.css';

import Seacrh from './components/Search/Search';
import Weather from './components/Weather/Weather';

function App() {

  let [city, setCity] = useState('');
  let [temp, setTemp] = useState(0);
  let [feelsLike, setFeelsLike] = useState(0);
  let [description, setDescription] = useState('');
  let [weather, setWeather] = useState('');
  let [otherData, setOtherData] = useState({});
  let [forecast, setForecast] = useState([]);

  const getWeather = (res) => {
    setCity(res.name)
    setDescription(res.weather[0].description)
    setWeather(res.weather[0].main)
    setTemp(Math.round(res.main.temp))
    setFeelsLike(Math.round(res.main.feels_like));
    setOtherData({
      'humidity': res.main.humidity,
      'windSpeed': Math.round(res.wind.speed * 3.6) // метр/секунду в км/час
    })
    WeatherApi.getForecast(res.name).then(data => setForecast(data.list))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      await WeatherApi.getWeatherByCord(pos.coords.latitude, pos.coords.longitude).then(res => getWeather(res))
    })
  }, [])

  const searchCityFunc = async (searchCity) => {
    if(searchCity){
      await WeatherApi.getWeatherByCity(searchCity).then(res => getWeather(res))
    }
  }

  useEffect(() => {}, [city])
  return (
    <div className="App">
      <Container maxWidth="md">
      	<Seacrh searchCityFunc={searchCityFunc.bind(this)} />
        <Weather forecast={forecast} city={city} temp={temp} feelsLike={feelsLike} description={description} weather={weather} otherData={otherData} />
      </Container>
    </div>
  );
}

export default App;
