import React from 'react'
import './NavCurrenciesPopular.scss'

const NavCurrenciesPopular = ({ popularcurrency }) => (
    <div className='NavCurrenciesPopular'>
            <ul>
                <li>
                    <span>{popularcurrency.code}</span>
                    <p>{popularcurrency.title}</p>
                </li>
            </ul>
    </div>
)

export default NavCurrenciesPopular