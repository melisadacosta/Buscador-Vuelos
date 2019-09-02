import React from 'react'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Input, { INPUT_SIZES } from 'components/Input/Input'
import './InputDateStart.scss'

const InputDateStart = () =>(
    <div className='InputDateStart'>
        <Input
        icon= {faCalendarAlt}
        name='date'
        typeInput= "date"
        type={INPUT_SIZES.SMALL}
        />
    </div>
)
export default InputDateStart;