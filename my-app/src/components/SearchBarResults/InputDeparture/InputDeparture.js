import React from 'react'
import Input, { INPUT_SIZES } from 'components/Input/Input';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { InputContextConsumer } from 'components/Contexts/InputContext';
import './InputDeparture.scss'

const InputDeparture = () =>(
    <div className='InputDeparture'>
        <label>From</label>
        <InputContextConsumer>
        {
            ({textIataOrigin }) =>(
                <Input
                icon= {faMapMarkerAlt}
                name='departure'
                typeInput= "text"
                value={textIataOrigin}
                type={INPUT_SIZES.BIG_RESULTS}
                 />
            )
        }
        </InputContextConsumer>
    </div>
)

export default InputDeparture