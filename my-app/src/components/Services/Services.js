import React from 'react';
import './Services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = ({icon, title, text}) => (
    <div className='services-container'>
        <FontAwesomeIcon 
                icon={icon} 
                className='services-icon'
                
            />
        <h3 className='title'>{title}</h3>
        <p className='text'>{text}</p>
    </div>
)

export default Services;