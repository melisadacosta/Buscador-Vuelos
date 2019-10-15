import React from 'react'
import './InputRadio.scss'

const InputRadio = ({ className }) => (
    <div className='RadioContainer'>
        <div className='input-check'>
            <label className={className}>
                <input className='input-radio' type='radio' name='radio' value='' checked="checked" />
                <span className="checkmark"></span>
                Round Trip
            </label>
        </div>
        <div className='input-check'>
            <label className={className}>
                <input className='input-radio' type='radio' name='radio' value='' />
                <span className="checkmark"></span>
                One Way
            </label>
        </div>
    </div>
)
export default InputRadio
