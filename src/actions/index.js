// similar to ajax
import axios from 'axios';

// key for weather api
const API_KEY = '1ed0c99b9c1da6dadbdb78332305ebaf';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// ACTION CREATOR (always returns an object with a "type" property)
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // axios will return a promise, which we call 'request'
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
