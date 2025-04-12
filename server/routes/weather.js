const express= require('express');
const router= express.Router();
const axios= require('axios');

router.get('/', async (req, res) => {
    const city=req.query.city;

    if(!city) {
        return res.status(400).json({ error: 'City is required' });
    }
    try{
        const apiKey= process.env.WEATHER_API_KEY;
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response= await axios.get(url);
        const data= response.data;
         const result= {
            temperature: data.main.temp,
            condition: data.weather[0].main,
            icon: data.weather[0].icon,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
    };
    res.json(result);
    }catch(error){
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

module.exports=router;