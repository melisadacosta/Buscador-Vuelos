import React from 'react'
import './ModalDropdown.scss'

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
