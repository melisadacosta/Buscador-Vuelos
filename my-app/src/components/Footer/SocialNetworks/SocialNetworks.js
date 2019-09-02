import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialNetworks.scss'

const SocialNetworks = ({icon}) =>(
    <div className='SocialNetworks'>
            <ul className='iconsList'>
                <li>
                <FontAwesomeIcon 
                icon={icon}/>
                </li>
            </ul>
        </div>
)

export default SocialNetworks