import React from 'react'
import BarResultsResponsive from '../BarResultsResponsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './BarResponsive.scss'

class BarResponsive extends React.Component {
    state = {
        barVisible: false,
    }
    toggleBar = () => {
        this.setState({
            barVisible:
                !this.state.barVisible
        })
    }
    render() {
        return(
            <>
                <div className='BarResponsive'>
                    <div className='more-results'>
                        <ul>
                            <li className='more-item' onClick={this.toggleBar}><a href='#' className='more-item-a'>Price  <FontAwesomeIcon icon={faCaretDown} /> </a> </li>
                        </ul>
                    </div>
                </div>
                {
                    this.state.barVisible &&
                    <BarResultsResponsive />
                }
            </>
        )
    }
}
export default BarResponsive