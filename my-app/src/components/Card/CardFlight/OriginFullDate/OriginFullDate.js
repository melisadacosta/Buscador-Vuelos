import React from 'react'
import moment from "moment";
import './OriginFullDate.scss'

class OriginFullDate extends React.Component {
    state = {
        currentDate: new Date(),
        markedDate: moment(new Date()).format("YYYY-MM-DD")
    };
    render() {
        const timeOrigin = moment(this.props.originFulldate).format('hh:mm');
        const timeOriginAmPm = moment(this.props.originFulldate).format('A');
        const dateOrigin = moment(this.props.originFulldate).format('ll');
        return (
            <div className='OriginFullDate'>
                <div className='time-date-container'>
                    <div className='time-container'>
                        <p>{timeOrigin}</p>
                        <span>{timeOriginAmPm}</span>
                    </div>
                    <div className='date-container'>
                        <p>{dateOrigin}</p>
                    </div>
                </div>
            </div>
        )
    }
}

//     <div className='originFulldate'>
//         <p>{props.originFulldate}</p>
//         {/* <p>{destinationFulldate}</p> */}
//     </div>
// )

export default OriginFullDate