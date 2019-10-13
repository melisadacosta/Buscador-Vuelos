import React from 'react'
import moment from "moment";
import './OriginFullDate.scss'

class OriginFullDate extends React.Component {
    state = {
        currentDate: new Date(),
        markedDate: moment(new Date()).format("YYYY-MM-DD"),
        airportState: "",
    };
    render() {
        const timeOrigin = moment(this.props.originFulldate).format('hh:mm');
        const timeOriginAmPm = moment(this.props.originFulldate).format('A');
        const dateOrigin = moment(this.props.originFulldate).format('ll');

        if (this.state.airportState === "") {
            fetch(`https://airports-dpvsjndcod.now.sh/city/${this.props.airport}`)
                .then(response => response.json())
                .then(res => this.setState({ airportState: res.state }))
        }
        return (
            <div className='OriginFullDate'>
                <div className='time-date-container'>
                    <div className='time-container'>
                        <p>{timeOrigin}</p>
                        <span>{timeOriginAmPm}</span>
                    </div>
                    <div className='airport'>
                        <p>{this.state.airportState}</p>
                    </div>
                    <div className='date-container'>
                        <p>{dateOrigin}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default OriginFullDate