import React from 'react'
import './index.css'
// import Nav from 'components/Nav/Nav';
// import Flights from 'components/Flights/Flights';
import NoMatch from 'components/Views/NoMatch'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'components/Views/Home';
import FlightsResults from 'components/Views/FlightsResults';
import BookingFlight from 'components/Views/BookingFlight';
import './styles/_styles.scss';
import Nav from 'components/Nav/Nav';



const App = () => (
    <>
        <BrowserRouter>
        <Nav />
            {/* <div className="nav-container">
                <ul className="nav-bar left">
                    <div className="logo-nav"><img src={adantrip} alt='' /></div>
                    <li>
                        <NavLink exact
                            to='/'
                        activeClassName='activo'
                        >Hotels</NavLink>
                    </li>
                    <li>
                        <NavLink exact
                            to='/flights'
                        activeClassName='activo'
                        >Rooms</NavLink>
                    </li>
                    <li>
                        <NavLink exact
                            to='/'
                            activeClassName='activo'
                            >Flights</NavLink>
                    </li>
                    <li>
                        <NavLink exact
                            to='/flights'
                            activeClassName='activo'
                            >Cars</NavLink>
                    </li>
                    <li>
                        <NavLink exact
                            to='/flights'
                            activeClassName='activo'
                            >Experiences</NavLink>
                    </li>
                </ul>
                <ul className="nav-bar right">
                    <li>
                        <NavLink exact
                            to='/flights'
                            activeClassName='activo'
                            >USD</NavLink>
                    </li>
                    <li>
                        <NavLink exact
                            to='/flights'
                            activeClassName='activo'
                            ></NavLink>
                    </li>
                    <li className="menu-item"><FontAwesomeIcon icon={faUserCircle} />
                        <NavLink exact
                            to='/flights'
                            activeClassName='activo'
                            >My Account</NavLink>
                        <ul className="sub-menu">
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    >Preferences</NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    >Notifications</NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    >Paymenth Methods</NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    >Travelers</NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    >History</NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink exact
                                    to='/flights'
                                    >Bookmarks</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div> */}
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


