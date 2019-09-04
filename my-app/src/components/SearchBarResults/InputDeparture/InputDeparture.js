import React from 'react'
import Input, { INPUT_SIZES } from 'components/Input/Input';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { InputContextConsumer } from 'components/Contexts/InputContext';

const InputDeparture = () =>(
    <div className='InputDeparture'>

        <InputContextConsumer>
        {
            ({textIataOrigin }) =>(

                <Input
                icon= {faMapMarkerAlt}
                name='departure'
                typeInput= "text"
                placeholder={textIataOrigin}
                type={INPUT_SIZES.BIG_RESULTS}
                 />
            )
        }
        </InputContextConsumer>
    </div>
)

export default InputDeparture