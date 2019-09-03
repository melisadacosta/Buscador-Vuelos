import React from 'react'
import './InputDeparture.scss'
import Input, { INPUT_SIZES } from 'components/Input/Input';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { InputContextConsumer } from 'components/Contexts/InputContext';

const InputDeparture = () =>(
    <div className='InputDeparture'>
        <InputContextConsumer>
        {
            ({updatetextIataOrigin, textIataOrigin }) =>(

                <Input
                icon= {faMapMarkerAlt}
                name='departure'
                typeInput= "text"
                placeholder='Departure'
                type={INPUT_SIZES.BIG}
                onChange = {updatetextIataOrigin}
                value = {textIataOrigin} />
            )
        }
        </InputContextConsumer>
    </div>
)

export default InputDeparture;