import React from 'react'
import Input, { INPUT_SIZES } from 'components/Input/Input'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './InputPassengers.scss';
import { InputContextConsumer } from 'components/Contexts/InputContext';

const InputPassengers = () =>(
    <div className = 'InputPassengers'>
        <InputContextConsumer>
        {
            ({updatetextAdults, textAdults }) =>(

                <Input
                icon= {faUserFriends}
                name='departure'
                typeInput= "number"
                placeholder='1'
                type={INPUT_SIZES.SMALL}
                onChange = {updatetextAdults}
                value = {textAdults}/>
            )
        }
        </InputContextConsumer>
    </div>
)
export default InputPassengers