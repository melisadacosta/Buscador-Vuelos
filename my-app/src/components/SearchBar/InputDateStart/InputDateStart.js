import React from 'react'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Input, { INPUT_SIZES } from 'components/Input/Input'
import './InputDateStart.scss'
import { InputContextConsumer } from 'components/Contexts/InputContext';

const InputDateStart = () => (
    <div className='InputDateStart'>
        <InputContextConsumer>
            {
                ({ updatetextFromDate, textFromDate }) => (

                    <Input
                        icon={faCalendarAlt}
                        name='date'
                        typeInput="date"
                        type={INPUT_SIZES.SMALL}
                        onChange={updatetextFromDate}
                        value={textFromDate}
                    />
                )
            }
        </InputContextConsumer>
    </div>
)
export default InputDateStart;
