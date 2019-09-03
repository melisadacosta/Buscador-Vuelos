import React from 'react';
import Input, { INPUT_SIZES } from 'components/Input/Input'
import './InputArrival.scss'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { InputContextConsumer } from 'components/Contexts/InputContext';

const InputArrival = () => (
    <div className='InputArrival'>
        <InputContextConsumer>
            {

                ({ updatetextIataDest, textIataDest }) => (

                    <Input
                        icon={faMapMarkerAlt}
                        name='arrival'
                        typeInput="text"
                        placeholder='Arrival'
                        type={INPUT_SIZES.BIG}
                        onChange={updatetextIataDest}
                        value={textIataDest}
                    />
                )
            }
        </InputContextConsumer>
    </div>
)

export default InputArrival