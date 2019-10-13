import React from 'react'
import { NavLink } from 'react-router-dom';
import './LinkFooterFlight.scss';

const LinkFooterFlight = ({ link, title }) => (
    <div className='LinkFooterFlight'>
        <ul>
            <li>
                <NavLink exact
                    to={link}
                >{title}</NavLink>
            </li>
        </ul>
    </div>
)

export default LinkFooterFlight