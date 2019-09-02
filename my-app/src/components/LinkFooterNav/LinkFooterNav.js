import React from 'react'
import { NavLink } from 'react-router-dom';
import './LinkFooterNav.scss';

const LinkFooter = ({ link, title, active, icon}) => (
    <div className='LinkFooter'>
        <ul>
            <li>
                <NavLink exact
                    to={link}
                    activeClassName={active}
                    FontAwesomeIcon icon={icon} 
                >{title}</NavLink>
            </li>
        </ul>
    </div>
)

export default LinkFooter;