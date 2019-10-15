import React from 'react'
import './NavCurrencies.scss'

const NavCurrencies = ({ currency }) => (
    <div className='NavCurrencies'>
        <ul>
            <li>
                <span>{currency.code}</span>
                <p>{currency.title}</p>
            </li>
        </ul>
    </div>
)

export default NavCurrencies