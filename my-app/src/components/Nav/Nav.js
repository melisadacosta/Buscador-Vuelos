import React from 'react';
import './Nav.scss';
import adantrip from 'assets/img/adantrip.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { withRouter} from 'react-router-dom';


//High Order Component - HOC
//pedazo de logica que se puede apendear a un componente 
// <button onClick ={this.redirect}>Nombredelboton</button> // nos lleva un boton a una vista
//tengo que poner el boton en el return
class Nav extends React.Component {
    redirect = () =>{
        this.props.history.push('/contact')
    }
    render() {
        return (
             <div className="Nav">
            {/* //     <div className="nav-container">
            //         <ul className="nav-bar left">
            //             <div className="logo-nav"><img src={adantrip} alt='' /></div>
            //             <li>Hotels</li>
            //             <li>Rooms</li>
            //             <li>Flights</li>
            //             <li>Cars</li>
            //             <li>Experiences</li>
            //         </ul>
            //         <ul className="nav-bar right">
            //             <li>USD</li>
            //             <li></li>
            //             <li className="menu-item"><FontAwesomeIcon icon={faUserCircle} />My Account
            //             <ul className="sub-menu">
            //                     <li className="sub-menu-item">Preferences</li>
            //                     <li className="sub-menu-item">Notifications</li>
            //                     <li className="sub-menu-item">Paymenth Methods</li>
            //                     <li className="sub-menu-item">Travelers</li>
            //                     <li className="sub-menu-item">History</li>
            //                     <li className="sub-menu-item">Bookmarks</li>
            //                 </ul>
            //             </li>
            //         </ul>
            //     </div>
            //     <button onClick ={this.redirect}>Nombredelboton</button> */}
             </div>
        )
    }
}

export default withRouter(Nav);

//input de tipo day en html5
//imput tipe number