import React from 'react'
import './CardFlight.scss'
import OriginFullDate from './OriginFullDate/OriginFullDate';
import PriceFlight from './PriceFlight/PriceFlight';
import DestinationFullDate from './DestinationFullDate/DestinationFullDate';
import Itinerary from './Itinerary/Itinerary';

class CardFlight extends React.Component {
    render() {
        const { flightInfo } = this.props;
        return (
            <div className='CardFlight'>
                <div className='origin-flight-container'>
                <img className="carrierLogo" src={"https://content.airhex.com/content/logos/airlines_"+flightInfo.first.originCarrierCode+"_200_200_s.png"} alt='' />
                    <OriginFullDate originFulldate={flightInfo.first.originFulldate} />
                    <Itinerary originIata={flightInfo.first.originIata} totalDuration={flightInfo.first.totalDuration}
                        originIntermediateIata={flightInfo.first.originIntermediateIata} destinationIata={flightInfo.first.destinationIata} />
                    <DestinationFullDate destinationFulldate={flightInfo.first.destinationFulldate} />
                    <PriceFlight price={flightInfo.price} classFlight={flightInfo.classFlight} />
                </div>
                <div className='return-flight-container'>
                    <img className="carrierLogo" src={"https://content.airhex.com/content/logos/airlines_"+flightInfo.second.originCarrierCode+"_200_200_s.png"} alt='' />
                    <OriginFullDate originFulldate={flightInfo.second.originFulldate} />
                    <Itinerary originIata={flightInfo.second.originIata} totalDuration={flightInfo.second.totalDuration}
                        originIntermediateIata={flightInfo.second.originIntermediateIata} destinationIata={flightInfo.second.destinationIata} />
                    <DestinationFullDate destinationFulldate={flightInfo.second.destinationFulldate} />
                </div>
            </div>
        )
    }
}

export default CardFlight