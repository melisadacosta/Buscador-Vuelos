import React from 'react';
import Input, { INPUT_SIZES } from 'components/Input/Input'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { InputContextConsumer } from 'components/Contexts/InputContext';

const InputArrival = () => (
    <div className='InputArrival'>
         <label>To</label>
        <InputContextConsumer>
            {
                ({ textIataDest, updatetextIataDest }) => (

                    <Input
                        icon={faMapMarkerAlt}
                        name='arrival'
                        typeInput="text"
                        placeholder={textIataDest}
                        type={INPUT_SIZES.BIG_RESULTS}
                    />
                )
            }
        </InputContextConsumer>
    </div>
)

export default InputArrival