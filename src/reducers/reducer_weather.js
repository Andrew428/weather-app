import { FETCH_WEATHER } from "../actions";

export default function (state = [], action){
        if(action.error === true){
                document.getElementById("cityInput").className += " has-error";
                document.getElementById("cityInput").placeholder = "That city was not found, try another one."
                return state;
        }
        switch(action.type){
                case FETCH_WEATHER:
                        //return action.payload.data.concat([ state ]);
                        return [action.payload.data, ...state];
                default: return state;
        }
        
        

};