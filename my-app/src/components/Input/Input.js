import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Input.scss'

export const INPUT_SIZES ={
    SMALL: 'small',
    BIG: 'big'
}


const Input = ({icon, name, type, typeInput, placeholder}) => (
   
        <div className= {type}>
        <FontAwesomeIcon 
                icon={icon} 
                className='input-icon'
                
            />
        <input name={name} type={typeInput} placeholder={placeholder} />

        </div>
    
)

export default Input;