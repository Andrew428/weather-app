import React from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart);

export default (props) => {
      return (
        <div className="weather_list_item_chart">
                    {/* <Sparklines data={props.data.data} width={250} height={200} >
                        <SparklinesCurve color={props.data.color} /> 
                    </Sparklines> */}
            {/* <div className="chart_units"> {average(props.data.data) }  {props.data.units} </div> */}
            <LineChart min={props.data.min} max={props.data.max} colors={props.data.colors} xtitle={props.data.xtitle} ytitle={props.data.ytitle} data={props.data.data}  />
        </div>
        
      );
    
  }