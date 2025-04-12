import React from 'react';

const WeatherCard = ({ data }) => {
    return(
        <div className="weather-dashboard">
            <div className="weather-box">
                <h2>City</h2>
                <p>{data.name}</p>
            </div>
            <div className="weather-box">
                <h2>Condition</h2>
                <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="icon" />
                <p>{data.condition}</p>
            </div>
            <div className="weather-box">
                <h2>Temperature</h2>
                <p className="temp">{data.temperature}°C</p>
            </div>
            <div className="weather-box">
                <h2>Humidity</h2>
                <p>{data.humidity}%</p>
            </div>

            <div className="weather-box">
                <h2>Wind Speed</h2>
                <p>{data.windSpeed} km/h</p>
            </div>
        </div>
    );
};

export default WeatherCard;