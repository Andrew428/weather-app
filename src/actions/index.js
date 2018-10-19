
const API_KEY = '680b7a1434c445784aa5d73c0dd869da';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?=appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}




export function fetchWeather(city) {

    const url = `${ROOT_URL}q=${city},us`;

    makeRequest('GET', url)
        .then(function (datums) {
            console.log(datums);
        })
        .catch(function (err) {
            console.error('Augh, there was an error!', err.statusText);
        });
    
    
    return(
        type: FETCH_WEATHER
    );


}


