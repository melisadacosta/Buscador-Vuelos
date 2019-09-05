import React from 'react'
import CheckboxGroup from '../CheckboxGroup';

const FlightCheckbox = () =>(
    <div className='StopsCheckbox'>
        <CheckboxGroup 
        title='Flight Class'
        text='Economy'
        price= '$316'
        text1='Business'
        price1='$402'
        text2='First'
        price2='$385'/>
    </div>
)

export default FlightCheckbox