import React from 'react'
import Input, { INPUT_SIZES } from 'components/Input/Input'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './InputPassengers.scss';

const InputPassengers = () =>(
    <div className = 'InputPassengers'>
        <Input
        icon= {faUserFriends}
        name='departure'
        typeInput= "number"
        placeholder='1'
        type={INPUT_SIZES.SMALL}/>
    </div>
)
export default InputPassengers