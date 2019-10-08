import React from 'react'
import './ModalDropdown.scss'
// class ModalDropdown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { menuOpen: false, menuClass: 'menu__container', menuIcon: ''  };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         let isOpen = this.state.menuOpen;
//         this.setState(state => ({ menuOpen: !isOpen, menuClass: isOpen ? 'menu__container menu__container--open' : 'menu__container'  }));
//     }

//     render() {
//         return (
//             <div class="menu">
//                 <a class="menu__title" onClick={this.handleClick}>
//                         <span class="menu__icon"> More{this.state.menuIcon}</span>
//                 </a>
//                 <ul class={this.state.menuClass}>
//                     <li class="menu__item">Hotels</li>
//                     <li class="menu__item">Rooms</li>
//                     <li class="menu__item">Flights</li>
//                     <li class="menu__item">Cars</li>
//                     <li class="menu__item">Experiences</li>
//                     <li class="menu__item">Currency USD</li>
//                     <li class="menu__item">Languages
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }

// export default ModalDropdown

class ModalDropdown extends React.Component {
    state = {
        visible: true
    }
    render() {
        return (
            <div className='ModalDropdown'>
                <ul className='list-hidden'>
                    <li className='more-list-item'>Departure take-off</li>
                    <li className='more-list-item'>Departure landing</li>
                    <li className='more-list-item'>Return take-off</li>
                    <li className='more-list-item'>Return landing</li>
                </ul>
            </div>
        )
    }
}

export default ModalDropdown
