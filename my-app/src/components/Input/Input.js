import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Input.scss'


export const INPUT_SIZES = {
    SMALL: 'small',
    BIG: 'big',
    BIG_RESULTS: 'big-results',
    SMALL_RESULTS: 'small-results'
}
export const CLASS_INPUT ={
    HOME: 'input-home',
    RESULTS: 'input-results'
}

class Input extends React.Component {
    state = {
        text: ''
    }
    updateText = event => {
        this.setState({ text: event.target.value })
    }
    render() {
        const { icon, name, type, typeInput, placeholder, onChange, value, className, title, subtitle, label} = this.props
        return (
                <>

                    <FontAwesomeIcon
                        icon={icon}
                        className='input-icon'

                    />
                    {/* <h1>{title}</h1>
                    <p>{subtitle}</p> */}
                    <input
                        label={label}
                        name={name}
                        className={className}
                        type={typeInput}
                        placeholder={placeholder}
                        onChange={onChange} 
                        value={value}
                    />
                </>
        )
    }
}



export default Input;