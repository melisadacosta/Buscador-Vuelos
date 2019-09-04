import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Input.scss'


export const INPUT_SIZES = {
    SMALL: 'small',
    BIG: 'big',
    BIG_RESULTS: 'big-results',
    SMALL_RESULTS: 'small-results'
}


class Input extends React.Component {
    render() {
        const { icon, name, type, typeInput, placeholder, onChange, value } = this.props
        return (
                <div className={type}>
                    <FontAwesomeIcon
                        icon={icon}
                        className='input-icon'

                    />
                    <input
                        name={name}
                        type={typeInput}
                        placeholder={placeholder}
                        onChange={onChange} 
                        value={value}
                    />
                </div>
        )
    }
}



export default Input;