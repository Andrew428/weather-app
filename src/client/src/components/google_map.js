import React,  { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount(){
        const google = window.google;
        new google.maps.Map(this.refs.map,{
            zoom:12,
            center:{
                lat: this.props.data.lat,
                lng: this.props.data.lon
            }
        });
    }
    render(){
        return <div ref="map" />;
    }
    
}

export default GoogleMap;