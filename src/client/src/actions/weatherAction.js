import * as actionTypes from './actionTypes';

export const fetchWeather = async function (city) {         
    const response = await fetch(`/api/weather/fetchWeather/${city}`);
    const body = await response.json();
    if (body.cod !== 200) {
        return { type: actionTypes.FETCH_WEATHER, error: true, weatherData: body }
    }
    return { type: actionTypes.FETCH_WEATHER, weatherData: body }
     
};

export const fetchForecast = async function (city) {         
    const response = await fetch(`/api/weather/fetchForecast/${city}`);
    const body = await response.json();
    if (body.cod !== "200") {
        return { type: actionTypes.FETCH_FORECAST, error: true, forecastData: body }
    }
    return { type: actionTypes.FETCH_FORECAST, forecastData: body }
     
};


