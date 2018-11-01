import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

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
        //console.log(state);
        this.setState(state);
    }


    onFormSubmit(event) {
         event.preventDefault();

         // go fetch weather data here
         this.props.fetchWeather(this.state.term);
         let state = {
            term : ''
       };      
       this.setState(state);
         
     }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="input-group"> 
                <input 
                    placeholder = "Get a 5 day forcast for you favorit cities"
                    className = "form-control search-city"
                    value = { this.state.term }
                    onChange = { this.onInputChange }
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            
            </form>
        );
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators ({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);