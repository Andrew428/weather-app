import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Chart from '../components/chart';
/*import  GoogleMap from '../components/google_map';*/

class WeatherList extends Component {
    renderWeather(data, index){
        console.log(data);  
        console.log(index);       
        const temps = data.list.map(weather => (weather.main.temp - 273.15) * 9/5 + 32);
        const humidity = data.list.map(weather => weather.main.humidity);
        const pressure = data.list.map(weather => weather.main.pressure);
        const city_data = {
            name: data.city.name,
            lat: data.city.coord.lat,
            lon: data.city.coord.lon
        }
        const temp_data = {
            data:temps,
            color: 'blue',
            units: 'F'
        }
        const humidity_data = {
            data:humidity,
            color: 'orange',
            units: 'hPa'
        }
        const pressure_data = {
            data:pressure,
            color: 'green',
            units: '%'
        }
        return(            
            <tr key={index}>
                <td >{city_data.name} 
                   {/*<GoogleMap data={city_data} />*/}
                </td>
                <Chart data={temp_data} />
                <Chart data={humidity_data} />
                <Chart data={pressure_data} />
            </tr>
        ); 
    }

    render() {
        return(

            <table className = "table table-hover" > 
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>                        
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map((data, index) => this.renderWeather(data, index))}
                </tbody>
            </table>
            
        );
    }
}


function mapStateToProps({ weather }){
    // return { weather : weather };
    return { weather };
}

export default connect (mapStateToProps)(WeatherList);