import React from 'react'
import Input, { INPUT_SIZES } from 'components/Input/Input'
import './InputDateEnd.scss'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { InputContextConsumer } from 'components/Contexts/InputContext';

const InputDateEnd = () => (
    <div className='InputDateName'>
        <InputContextConsumer>
            {
                ({ updatetextToDate, textToData }) => (

                    <Input
                        icon={faCalendarAlt}
                        name='date'
                        typeInput="date"
                        type={INPUT_SIZES.SMALL}
                        onChange={updatetextToDate}
                        value={textToData}
                    />
                )
            }
        </InputContextConsumer>
    </div>
)


export default InputDateEnd;
