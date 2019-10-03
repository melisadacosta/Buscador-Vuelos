import React from 'react'
import moment from "moment";
import '../OriginFullDate/OriginFullDate.scss'

class DestinationFullDate extends React.Component {
    state = {
        currentDate: new Date(),
        markedDate: moment(new Date()).format("YYYY-MM-DD")
    };
    render() {
        const timeDestination = moment(this.props.destinationFulldate).format('hh:mm');
        const timeDestinationAmPm = moment(this.props.destinationFulldate).format('A');
        const dateDestination = moment(this.props.destinationFulldate).format('ll');
        return (
            <div className='DestinationFullDate'>
                <div className='time-date-container'>
                    <div className='time-container'>
                        <p>{timeDestination}</p>
                        <span>{timeDestinationAmPm}</span>
                    </div>
                    <div className='date-container'>
                        <p>{dateDestination}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DestinationFullDate