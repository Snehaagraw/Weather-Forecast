import React from 'react';

const WeatherCard = ({ data }) => {
    return(
        <div className="weather-card">
            <h2>{data?.name}</h2>
            <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt={data.condition} />
            <p>Temperature:{data.temperature}C</p>
            <p>Condition:{data.condition}</p>
            <p>Humidity:{data.humidity}%</p>
            <p>Wind Speed:{data.windSpeed}m/s</p>
        </div>
    );
};

export default WeatherCard;