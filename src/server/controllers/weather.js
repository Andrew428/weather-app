const axios = require("axios");

exports.getWeather = async (req, res, next)=>{ 
    console.log(`☁️   Getting Weather for ${req.params.city}`)    
    const API_KEY = '';
    const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
    const city = req.params.city;
    const url = `${ROOT_URL}&q=${city},us&mode=json`;   
    return axios.get(url).then((data) => {
        // console.log(data);        
        res.send(data.data)
    }).catch(err => {
        console.log(`❌  Error`, err.response.data);
        res.send(err.response.data)
        
    }); 
}

exports.getForecast = async (req, res, next)=>{ 
    console.log(`☁️   Getting Forecast for ${req.params.city}`)    
    const API_KEY = '680b7a1434c445784aa5d73c0dd869da';
    const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
    const city = req.params.city;
    const url = `${ROOT_URL}&q=${city},us&mode=json`;   
    return axios.get(url).then((data) => {
        // console.log(data);        
        res.send(data.data)
    }).catch(err => {
        console.log(`❌  Error`, err.response.data);
        res.send(err.response.data)
        
    }); 
}