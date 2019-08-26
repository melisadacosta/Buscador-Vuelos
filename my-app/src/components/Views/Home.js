import React from 'react'
import Nav from 'components/Nav/Nav';
import Flights from 'components/Flights/Flights';
import ServicesOptions from 'components/Services/ServicesOptions/ServicesOptions';

const Home = () => (
    <>
            {/* <ul>
                <li>
                    <NavLink exact 
                    to='/'
                    activeClassName='activo'
                    activeStyle= {{color: 'green'}}>Home</NavLink>
                </li>
                <li>
                    <NavLink exact 
                    to='/flights'
                    activeClassName='activo'
                    activeStyle= {{color: 'lime'}}>About</NavLink>
                </li>
            </ul> */}
        <Nav />
        <Flights />
        <ServicesOptions />

    </>
)

export default Home;