import React from 'react'
import './NavResponsive.scss'
import adantrip from 'assets/img/adantrip.png'
import US from 'assets/img/US.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class NavResponsive extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menuOpen: false, menuClass: 'menu__container', menuIcon: <FontAwesomeIcon icon={faBars} /> };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let isOpen = this.state.menuOpen;
        this.setState(state => ({ menuOpen: !isOpen, menuClass: isOpen ? 'menu__container menu__container--open' : 'menu__container'  }));
    }

    render() {
        return (
            <div class="menu">
                <a class="menu__title" onClick={this.handleClick}>
                    <div className="logo-nav"><img src={adantrip} alt='' />
                        <span class="menu__icon">{this.state.menuIcon}</span>
                    </div>
                </a>
                <ul class={this.state.menuClass}>
                    <li class="menu__item">Hotels</li>
                    <li class="menu__item">Rooms</li>
                    <li class="menu__item">Flights</li>
                    <li class="menu__item">Cars</li>
                    <li class="menu__item">Experiences</li>
                    <li class="menu__item">Currency USD</li>
                    <li class="menu__item">Languages
                    <div className='flag-nav'>
                        <img src={US} alt='' />
                         </div></li>
                    <li class="menu__item">
                    <FontAwesomeIcon icon={faUserCircle} />My Account</li>
                </ul>
            </div>
        );
    }
}

export default NavResponsive