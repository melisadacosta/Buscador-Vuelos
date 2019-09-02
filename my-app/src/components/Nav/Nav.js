import React from 'react';
import './Nav.scss';
import adantrip from 'assets/img/adantrip.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import LinkFooterNav from 'components/LinkFooterNav/LinkFooterNav'
import NavLanguageContainer from 'components/Nav/NavLanguageContainer/NavLanguageContainer'
import US from 'assets/img/US.png'
import NavCurrenciesContainer from 'components/Nav/NavCurrenciesContainer/NavCurrenciesContainer';
import NavCurrenciesPopularContainer from 'components/Nav/NavCurrenciesContainer/NavCurrenciesPopularContainer/NavCurrenciesPopularContainer';

//High Order Component - HOC
//pedazo de logica que se puede apendear a un componente 
// <button onClick ={this.redirect}>Nombredelboton</button> // nos lleva un boton a una vista
//tengo que poner el boton en el return


const Nav = () => (
    // redirect = () =>{
    //     this.props.history.push('/contact')
    // }
    // render() {
    //     return (
    <div className="Nav">
        {/* <button onClick ={this.redirect}>Nombredelboton</button> */}
        <div className="nav-container">
            <ul className="nav-bar left">
                <div className="logo-nav"><img src={adantrip} alt='' /></div>
                <li>
                    <LinkFooterNav
                        link='/'
                        activeClassName='active'
                        title='Hotels' />
                </li>
                <li>
                    <LinkFooterNav
                        link='/'
                        activeClassName='active'
                        title='Rooms' />
                </li>
                <li>
                    <LinkFooterNav
                        link='/'
                        activeClassName='active'
                        title='Flights' />
                </li>
                <li>
                    <LinkFooterNav
                        link='/'
                        activeClassName='active'
                        title='Cars' />
                </li>
                <li>
                    <LinkFooterNav
                        link='/'
                        activeClassName='active'
                        title='Experiences' />
                </li>
            </ul>
            <ul className="nav-bar right">
                <li className="menu-item">
                    <LinkFooterNav
                        link='/'
                        activeClassName='active'
                        title='USD' />
                        <ul className='sub-menu-flags'>
                        <NavCurrenciesPopularContainer />
                        <NavCurrenciesContainer />
                        </ul>
                </li>
                <li className="menu-item">
                    <LinkFooterNav
                        link='/'
                        activeClassName='active'
                         />
                         <div className='flag-nav'>
                        <img src={US} alt='' />
                         </div>
                    <ul className='sub-menu-flags'>
                        <NavLanguageContainer />
                    </ul>
                </li>
                <li className="menu-item">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <LinkFooterNav
                        link='/'
                        activeClassName='active'
                        title='My Account'
                    />
                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <LinkFooterNav
                                link='/'
                                activeClassName='active'
                                title='Preferences' />
                        </li>
                        <li className="sub-menu-item">
                            <LinkFooterNav
                                link='/'
                                activeClassName='active'
                                title='Notifications' />
                        </li>
                        <li className="sub-menu-item">
                            <LinkFooterNav
                                link='/'
                                activeClassName='active'
                                title='Paymenth Methods' />
                        </li>
                        <li className="sub-menu-item">
                            <LinkFooterNav
                                link='/'
                                activeClassName='active'
                                title='Travelers' />
                        </li>
                        <li className="sub-menu-item">
                            <LinkFooterNav
                                link='/'
                                activeClassName='active'
                                title='History' />
                        </li>
                        <li className="sub-menu-item">
                            <LinkFooterNav
                                link='/'
                                activeClassName='active'
                                title='Bookmarks' />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

)


export default withRouter(Nav);

//input de tipo day en html5
//imput tipe number