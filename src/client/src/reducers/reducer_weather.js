import * as actionTypes from '../actions/actionTypes';

export default function (state = [], action){
        // console.log("stats:",state);
        if(action.error === true){
                document.getElementById("cityInput").className += " has-error";
                document.getElementById("cityInput").placeholder = "That city was not found, try another one."
                return state;
        }
        switch(action.type){
                case actionTypes.FETCH_WEATHER:                        
                        return [action.weatherData];                
                default: return state;
        }
        
        

};