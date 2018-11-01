import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
    
      return (
        <td >
            <Sparklines data={props.data.data} width={250} height={200} >
                <SparklinesLine color={props.data.color} />
            </Sparklines>
        </td>
        
      );
    
  }