import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchForecast, fetchWeather } from '../actions/weatherAction';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term : '' }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputChange(event) {        
        let state = {
             term : event.target.value 
        };        
        this.setState(state);
    }


    onFormSubmit = async (event) =>{
         event.preventDefault();
         document.getElementById("cityInput").classList.remove("has-error");
         document.getElementById("cityInput").placeholder = "Get a 24 hour forecast"

        // go fetch weather data here
        if(this.state.term !== ""){
            this.props.fetchForecast(this.state.term); 
            this.props.fetchWeather(this.state.term);       
            let state = {
                term : ''
            };      
            this.setState(state);   
        }         
     }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="input-group search_bar">
                <input 
                    placeholder = "Get a 24 hour forecast"
                    className = "form-control search-city"
                    value = { this.state.term }
                    onChange = { this.onInputChange }
                    id="cityInput"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            
            </form>
        );
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators ({ fetchForecast, fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);