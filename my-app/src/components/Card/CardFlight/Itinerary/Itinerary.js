import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import './Itinerary.scss'

class Itinerary extends React.Component {
    render() {
        const originIata = this.props.originIata;
        const totalDuration = this.props.totalDuration;
        const destinationIata = this.props.destinationIata;
        const intermediateIata = this.props.intermediateIata === this.props.destinationIata ||
            this.props.intermediateIata == this.props.originIata ? "" : this.props.intermediateIata;
        return (
            <div className='Itinerary'>
                <div className='origin-flight'>
                    <div className='icon-plane-origin'>
                        <FontAwesomeIcon icon={faPlane} />
                    </div>
                    <div className='circle' />
                    <div className='origin'>
                        <p>{originIata}</p>
                    </div>
                </div>
                <div className='intermediate-flight'>
                    <div className='intermediate'>
                        <p>{totalDuration}</p>
                    </div>
                    <div className={intermediateIata == "" ? 'circle hide' : 'circle show'} />
                    <div className='origin'>
                        <p>{intermediateIata}</p>
                    </div>
                </div>
                <div className='flight-path-line' />
                <div className='destination-flight'>
                    <div className='icon-plane-destination'>
                        <FontAwesomeIcon icon={faPlane} />
                    </div>
                    <div className='circle' />
                    <div className='origin'>
                        <p>{destinationIata}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Itinerary