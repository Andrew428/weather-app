import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Chart from '../components/chart';
/*import  GoogleMap from '../components/google_map';*/

class WeatherList extends Component {
    renderWeather(data){
        console.log("weatherData", data);
        if(data.length>0){
            var imgurl = `http://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;
            return (
                <div className="weatherIconDiv">
                    <img className="weatherIconImg" alt="" src={imgurl} height="100" width="100"></img>
                    <label className="weatherTemp">{((data[0].main.temp - 273.15) * 9/5 + 32).toFixed(0)} F</label>
                </div>
            );
        }
    }

    renderForecast(data, index){
        console.log("forcastData", data);  
        // console.log(index);
        const temps = {};
        const humidities = {}
        const pressures = {}
        data.list.slice(0,9).map((weather) =>{ 
                var date = new Date(weather.dt_txt);
                var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
                var offset = date.getTimezoneOffset() / 60;
                var hours = date.getHours();            
                newDate.setHours(hours - offset); 
                var time =  newDate.toLocaleTimeString();
                var temp = ((weather.main.temp - 273.15) * 9/5 + 32);
                var tData = {
                  [time] : temp.toFixed(0)
                }
                Object.assign(temps, tData);
                var hData = {
                [time] : weather.main.humidity.toFixed(0)
                }
                Object.assign(humidities, hData)
                var pData = {
                [time] : weather.main.pressure.toFixed(0)
                }
                Object.assign(pressures, pData)
                return weather
        });
        console.log(temps)
        const mins_temps = data.list.slice(0,9).map(weather => (weather.main.temp_min - 273.15) * 9/5 + 32);
        const maxs_temps = data.list.slice(0,9).map(weather => (weather.main.temp_max - 273.15) * 9/5 + 32);
        const min_temp = Math.min(...mins_temps);
        const max_temp = Math.max(...maxs_temps);
        const humidity = data.list.slice(0,8).map(weather => weather.main.humidity);
        const min_humidity = Math.min(...humidity);
        const max_humidity = Math.max(...humidity);
        const pressure = data.list.slice(0,8).map(weather => weather.main.pressure);
        const min_pressure = Math.min(...pressure);
        const max_pressure = Math.max(...pressure);
        const city_data = {
            name: data.city.name,
            lat: data.city.coord.lat,
            lon: data.city.coord.lon
        }
        const temp_data = {
            data:temps,
            min: min_temp.toFixed(0),
            max: max_temp.toFixed(0),
            ytitle: "Temperature (F)",
            xtitle: "Time",
            colors : ["#68BFF9"]
           
        }
        const humidity_data = {
            data:humidities,
            min: min_humidity.toFixed(0),
            max: max_humidity.toFixed(0),
            ytitle: "Humidity",
            xtitle: "Time",
            colors : ["#F4AA3A"]
        }
        const pressure_data = {
            data:pressures,
            min: min_pressure.toFixed(0),
            max: max_pressure.toFixed(0),
            ytitle: "Pressure",
            xtitle: "Time",
            colors : ["#B068F9"]
        }
        return(
            <ul className="city_list" key={city_data.name}>            
                <li className="city_list_item">
                    {/* <div className="city_list_item_label">                        
                        High {max_temp.toFixed(0)} (F) <br></br>
                        Low {min_temp.toFixed(0)} (F) <br></br>

                    </div> */}
                    <Chart data={temp_data} />                    
                </li>
                <li >
                    {/* <div className="city_list_item_label">Pressure (hPa)</div>                    */}
                    <Chart data={pressure_data} />
                </li>
                <li >
                    {/* <div className="city_list_item_label">Humidity (%)</div>                     */}
                    <Chart data={humidity_data} />
                    
                </li>
            </ul>
        ); 
    }

    render() {        
        var forecast = this.props.forecast;
        var weather = this.props.weather;
        console.log("forecast", forecast);
        console.log("weather", weather);
        var city_name = "Search for a City";
        if(forecast.length>0){
            city_name = forecast[0].city.name;
        }
        return(
        
            <div className = "weather_list_div" >                 
                <div className="weather_list_cityname_label">                    
                    <h2>{city_name}</h2>   
                    {this.renderWeather(weather)}                                           
                </div>                
                <div className="weather_list_charts">
                    {forecast.map((data, index) => this.renderForecast(data, index))}
                </div>
            </div>
            
        );
    }
}


function mapStateToProps({ forecast, weather }){
    // return { weather : weather };
    return { forecast, weather };
}

export default connect (mapStateToProps)(WeatherList);