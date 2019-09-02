import React from 'react'
import './NavCurrencies.scss'

const NavCurrencies = ({ currency, popularcurrency }) => (
    <div className='NavCurrencies'>
        <ul>
            <li>
                <span>{currency.code}</span>
                <p>{currency.title}</p>
            </li>
        </ul>
        {/* <div className='popular'>
            <ul>
                <li>
                    <span>{popularcurrency.code}</span>
                    <p>{popularcurrency.title}</p>
                </li>
            </ul>
        </div> */}
    </div>
)

export default NavCurrencies