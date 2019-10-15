import React from 'react'
import './BarResultsResponsive.scss'

class BarResultsResponsive extends React.Component {
    state = {
        visible: true
    }
    render() {
        return(
            <div className='BarResultsResponsive'>
                <ul className='list-hidden'>
                    <li className='more-list-item'>Price</li>
                    <li className='more-list-item'>Duration</li>
                    <li className='more-list-item'>Recommended</li>
                    <li className='more-list-item'>Airline Name</li>
                    <li className='more-list-item'>Departure take-off</li>
                    <li className='more-list-item'>Departure landing</li>
                    <li className='more-list-item'>Return take-off</li>
                    <li className='more-list-item'>Return landing</li>
                </ul>
            </div>

        )
    }
}

export default BarResultsResponsive