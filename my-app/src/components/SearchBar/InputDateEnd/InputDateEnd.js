import React from 'react'
import Input, { INPUT_SIZES } from 'components/Input/Input'
import './InputDateEnd.scss'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const InputDateEnd = () =>(
    <div className='InputDateName'>
        <Input
        icon= {faCalendarAlt}
        name='date'
        typeInput= "date"
        type={INPUT_SIZES.SMALL}
        />
    </div>
)

export default InputDateEnd;
