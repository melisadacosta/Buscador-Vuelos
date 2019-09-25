import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SocialNetworks = ({icon, className}) =>(
    <div className='SocialNetworks'>
            <ul className={className}>
                <li>
                <FontAwesomeIcon 
                icon={icon}/>
                </li>
            </ul>
        </div>
)

export default SocialNetworks