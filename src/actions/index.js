import axios from 'axios';
const API_KEY = '680b7a1434c445784aa5d73c0dd869da';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us&mode=json`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}


