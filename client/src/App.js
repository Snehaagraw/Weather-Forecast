import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';

function App() {
  const[weatherData, setWeatherData] = useState(null);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState("");

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

  return (
    <div className="App">
      <h1>Real-Time Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <p style={{color:"red"}}>{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
