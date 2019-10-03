import React from 'react'
import './PriceFlight.scss'

class PriceFlight extends React.Component {
    render() {
        const price = this.props.price;
        const classFlight = this.props.classFlight;
        return (
            <div className='PriceFlight'>
                <div className='price'>
                    <p>${price}</p>
                </div>
                <div className='class-flight'>
                    <p>{classFlight}</p>
                </div>
                <button className='button-booknow'>
                    Book Now
            </button>
            </div>
        )
    }
}

export default PriceFlight