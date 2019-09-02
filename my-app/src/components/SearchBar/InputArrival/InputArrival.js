import React from 'react';
import Input, { INPUT_SIZES }  from 'components/Input/Input'
import './InputArrival.scss'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const InputArrival = () => (
    <div className='InputArrival'>
        <Input
        icon= {faMapMarkerAlt}
        name='arrival'
        typeInput= "text"
        placeholder='Arrival'
        type={INPUT_SIZES.BIG}/>
    </div>
)

export default InputArrival