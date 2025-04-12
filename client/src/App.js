import './App.css';
import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import CitySearch from './components/CitySearch';
import axios from 'axios';

function App() {
  const[weatherData, setWeatherData] = useState(null);
  const[selectedCity, setSelectedCity] = useState("");
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_GEODB_API_KEY;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    setWeatherData(null);
    try {
      const response = await axios.get(`http://localhost:3000/weather?city=${city}`);
      setWeatherData({ ...response.data, name:city});
    } catch (err) {
      setError("Error fetching weather data for the given city.");
    }
    setLoading(false);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    fetchWeather(city);
  };

  return (
    <div className="App">
      <h1>Real-Time Weather Dashboard</h1>
      <CitySearch onSelectCity={handleCitySelect} />
      {loading && <p>Loading...</p>}
      {error && <p style={{color:"red"}}>{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
