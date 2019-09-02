import React from 'react'
import './InputDeparture.scss'
import Input, { INPUT_SIZES } from 'components/Input/Input';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const InputDeparture = () =>(
    <div className='InputDeparture'>
        <Input
        icon= {faMapMarkerAlt}
        name='departure'
        typeInput= "text"
        placeholder='Departure'
        type={INPUT_SIZES.BIG}/>
    </div>
)

export default InputDeparture;