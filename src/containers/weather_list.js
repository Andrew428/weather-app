import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Chart from '../components/chart'

class WeatherList extends Component {
    renderWeather(data){
        console.log(data);        
        const temps = data.list.map(weather => (weather.main.temp - 273.15) * 9/5 + 32);
        const humidity = data.list.map(weather => weather.main.humidity);
        const pressure = data.list.map(weather => weather.main.pressure);
        const temp_data = {
            data:temps,
            color: 'blue'
        }
        const humidity_data = {
            data:humidity,
            color: 'orange'
        }
        const pressure_data = {
            data:pressure,
            color: 'green'
        }
        return(            
            <tr key={data.city.name}>
                <td >{data.city.name}</td>
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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>                        
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
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