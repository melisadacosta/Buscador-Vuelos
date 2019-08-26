import React from 'react'
import './InputDeparture.scss'
import Input from 'components/Input/Input';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const InputDeparture = () =>(
    <div className='InputDeparture'>
        <Input
        icon= {faMapMarkerAlt}
        name='departure'
        type= "text"
        placeholder='Departure'/>
    </div>
)

export default InputDeparture;