import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
    var total = 0;
    for(var x = 0; x < data.length; x++){
        total += data[x];
    }
  
    return (total/data.length).toFixed(0);

}


export default (props) => {
      return (
        <td >
            <Sparklines data={props.data.data} width={250} height={200} >
                <SparklinesLine color={props.data.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div> {average(props.data.data) }  {props.data.units} </div>
        </td>
        
      );
    
  }