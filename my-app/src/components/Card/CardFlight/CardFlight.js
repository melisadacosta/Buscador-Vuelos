import React from 'react'
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import './CardFlight.scss'

class CardFlight extends React.Component {
    state = {
        currentDate: new Date(),
        markedDate: moment(new Date()).format("YYYY-MM-DD")
    };
    render() {
        const { flightInfo } = this.props;
        const date = moment(flightInfo.first.originFulldate).format('ll');
        const time = moment(flightInfo.first.originFulldate).format('LT');
        return (
            <div className='CardFlight'>
                <div className='time-date-container'>
                    <div className='time-container'>
                        <p>{time}</p>
                    </div>
                    <div className='date-container'>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='scale-flight'>
                    <div className='origin-flight'>
                        <div className='icon-plane-origin'>
                            <FontAwesomeIcon icon={faPlane} />
                        </div>
                        <div className='circle' />
                        <div className='origin'>
                            <p>{flightInfo.first.destinationIata}</p>
                        </div>
                    </div>
                    <div className='flight-path-line' />
                    <div className='destination-flight'>
                    <div className='icon-plane-destination'>
                            <FontAwesomeIcon icon={faPlane} />
                        </div>
                        <div className='circle' />
                        <div className='origin'>
                            <p>{flightInfo.second.destinationIata}</p>
                        </div>
                    </div>
                </div>
                <div className='price-container'>
                    <div className='price'>
                        <p>${flightInfo.price}</p>
                    </div>
                    <div className='class-flight'>
                        <p>{flightInfo.classFlight}</p>
                    </div>
                    <button className='button-booknow'>
                        Book Now
            </button>
                </div>
                {/* <OriginFullDate /> */}
            </div>
        )
    }
}

export default CardFlight