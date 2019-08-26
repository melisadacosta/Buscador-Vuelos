import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Input.scss'

const Input = ({icon, name, type, placeholder}) => (
    <div className='Input'>
        <FontAwesomeIcon 
                icon={icon} 
                className='input-icon'
                
            />
        <input name={name} type={type} placeholder={placeholder} />
    </div>
)

export default Input;