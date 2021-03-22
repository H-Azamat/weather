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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      WeatherApi.getWeatherByCord(pos.coords.latitude, pos.coords.longitude).then(res => {
        setCity(res.name)
        setDescription(res.weather[0].description)
        setWeather(res.weather[0].main)
        setTemp(Math.round(res.main.temp))
        setFeelsLike(Math.round(res.main.feels_like));
      })
      .catch(() => {
        alert('sdaksda')
      })
    })
  }, [])

  const getWeather = async (searchCity) => {
    if(searchCity){
      WeatherApi.getWeatherByCity(searchCity).then(res => {
        setCity(res.name)
        setDescription(res.weather[0].description)
        setWeather(res.weather[0].main)
        setTemp(Math.round(res.main.temp))
        setFeelsLike(Math.round(res.main.feels_like));
      })
      .catch((error) => {
        if(error.message === 'Request failed with status code 404'){
          alert('Название города написан не правильно или такого города не существует, проверьте пожалуйста')
        } 
      })
    }
  }

  useEffect(() => {}, [city])

  //88 925-11-61
  return (
    <div className="App">
      <Container maxWidth="md">
      	<Seacrh getWeather={getWeather.bind(this)} />
        <Weather city={city} temp={temp} feelsLike={feelsLike} description={description} weather={weather} />
      </Container>
    </div>
  );
}

export default App;
