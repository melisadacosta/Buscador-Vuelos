import React from 'react'
import moment from "moment";

class CardFlight extends React.Component {
    state = {
        currentDate: new Date(),
        markedDate: moment(new Date()).format("YYYY-MM-DD")
       };
    render(){
        const { flightInfo } = this.props;
        const date = moment(flightInfo.first.originFulldate).format("MMMM D, YYYY");
        const time = moment(flightInfo.first.originFulldate).format('LT'); 
        return(
                <div className='CardFlight'>
                    <p>{flightInfo.price}</p>
                    <p>{date}</p>
                    <p>{time}</p>
                    {/* <OriginFullDate /> */}
                </div>
        )
        }
    }
export default CardFlight