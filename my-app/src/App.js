import React from 'react'
import './index.css'
// import Nav from 'components/Nav/Nav';
// import Flights from 'components/Flights/Flights';
import NoMatch from 'components/Views/NoMatch'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from 'components/Views/Home';
import FlightsResults from 'components/Views/FlightsResults';
import BookingFlight from 'components/Views/BookingFlight';
import './styles/_styles.scss';
import adantrip from 'assets/img/adantrip.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <>
        <BrowserRouter>
            <div className="nav-container">
                <ul className="nav-bar left">
                    <div className="logo-nav"><img src={adantrip} alt='' /></div>
                    <li>
                        <NavLink exact
                            to='/'
                        // activeClassName='activo'
                        // activeStyle={{ color: 'red' }}>
                        >Hotels</NavLink>
                    </li>
                    <li>
                        <NavLink exact
                            to='/flights'
                        // activeClassName='activo'
                        // activeStyle={{ color: 'red' }}>
                        >Rooms</NavLink>
                    </li>
                    <li>
                        <NavLink exact
                            to='/'
                            // activeClassName='activo'
                            activeStyle={{ color: 'red' }}>
                            Flights</NavLink>
                    </li>
                    <li>
                        <NavLink exact
                            to='/flights'
                            activeClassName='activo'
                            activeStyle={{ color: 'red' }}>Cars</NavLink>
                    </li>
                    <li>
                        <NavLink exact
                            to='/flights'
                            activeClassName='activo'
                            activeStyle={{ color: 'red' }}>Experiences</NavLink>
                    </li>
                </ul>
                <ul className="nav-bar right">
                    <li>
                        <NavLink exact
                            to='/flights'
                            activeClassName='activo'
                            activeStyle={{ color: 'red' }}>USD</NavLink>
                    </li>
                    <li>
                        <NavLink exact
                            to='/flights'
                            activeClassName='activo'
                            activeStyle={{ color: 'red' }}></NavLink>
                    </li>
                    <li className="menu-item"><FontAwesomeIcon icon={faUserCircle} />
                        <NavLink exact
                            to='/flights'
                            activeClassName='activo'
                            activeStyle={{ color: 'red' }}>My Account</NavLink>
                        <ul className="sub-menu">
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    activeClassName='activo'
                                    activeStyle={{ color: 'red' }}>Preferences</NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    activeClassName='activo'
                                    activeStyle={{ color: 'red' }}>Notifications</NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    activeClassName='activo'
                                    activeStyle={{ color: 'red' }}>Paymenth Methods</NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    activeClassName='activo'
                                    activeStyle={{ color: 'red' }}>Travelers</NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    activeClassName='activo'
                                    activeStyle={{ color: 'red' }}>History</NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    activeClassName='activo'
                                    activeStyle={{ color: 'red' }}>Bookmarks</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/flights' component={FlightsResults} />
                <Route path='/bookingflight' component={BookingFlight} />
                <Route component={NoMatch} />
                {/* <Nav />
            <Flights /> */}
            </Switch>
        </BrowserRouter>
    </>
);

export default App


