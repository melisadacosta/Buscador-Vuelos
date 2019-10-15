import React from 'react'
import './BarResults.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import ModalDropdown from './ModalDropdown/ModalDropdown'
import BarResponsive from './BarResultsResponsive/BarResponsive/BarResponsive'

class BarResults extends React.Component {
    state = {
        dropdownVisible: false,
    }
    toggleDropdown = () => {
        this.setState({
            dropdownVisible:
                !this.state.dropdownVisible
        })
    }
    render() {
        return (
            <>
                <div className='BarResults'>
                    <div className='list-bar'>
                        <h4>Sort by:</h4>
                        <ul>
                            <li><a href='#'>Price<span>Low -> High</span></a></li>
                            <li className='active'><a href='#'>Duration<span>Long -> Short</span></a></li>
                            <li><a href='#'>Recommended<span>High -> Low</span></a></li>
                            <li><a href='#'>Airline Name<span>Name A -> Z</span></a></li>
                        </ul>
                    </div>
                    <div className='more-results'>
                        <ul>
                            <li className='more-item' onClick={this.toggleDropdown}><a href='#' className='more-item-a'>More  <FontAwesomeIcon icon={faCaretDown} /> </a> </li>
                        </ul>
                    </div>
                    
                </div>

                {
                    this.state.dropdownVisible &&
                    <ModalDropdown />
                }
            </>
        )
    }
}


export default BarResults


