import React from 'react'
import './NavLanguages.scss'

const NavLanguages = ({language}) =>(
    <div className = 'NavLanguages'>
        <div className='flags-list'>
            <img src={language.image} alt=''/>
            <p>{language.title}</p>
        </div>
    </div>
)

export default NavLanguages