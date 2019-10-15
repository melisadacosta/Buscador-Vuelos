import React from 'react'
import './CardFlight.scss'
import OriginFullDate from './OriginFullDate/OriginFullDate';
import PriceFlight from './PriceFlight/PriceFlight';
import DestinationFullDate from './DestinationFullDate/DestinationFullDate';
import Itinerary from './Itinerary/Itinerary';
import ImgAirline from './ImgAirline/ImgAirline';

class CardFlight extends React.Component {

    render() {

        const { flightInfo } = this.props;
        return (
            <div className='CardFlight'>
                <div className='origin-cardflight'>
                    <div className='origin-flight-container'>
                        <img className="carrierLogo" src={"https://content.airhex.com/content/logos/airlines_" + flightInfo.first.originCarrierCode + "_200_200_s.png"} alt='' />
                        <OriginFullDate originFulldate={flightInfo.first.originFulldate} airport={flightInfo.first.originIata} />
                        <Itinerary originIata={flightInfo.first.originIata} totalDuration={flightInfo.first.totalDuration}
                            intermediateIata={flightInfo.first.originIntermediateIata} destinationIata={flightInfo.first.destinationIata} />
                        <DestinationFullDate destinationFulldate={flightInfo.first.destinationFulldate} airport={flightInfo.first.destinationIata} />
                        <PriceFlight price={flightInfo.price} classFlight={flightInfo.classFlight} />
                    </div>
                    <ImgAirline airline={flightInfo.first.originCarrierCode} />
                </div>
                <div className='return-cardflight'>
                    <div className='return-flight-container'>
                        <img className="carrierLogo" src={"https://content.airhex.com/content/logos/airlines_" + flightInfo.second.originCarrierCode + "_200_200_s.png"} alt='' />
                        <OriginFullDate originFulldate={flightInfo.second.originFulldate} airport={flightInfo.second.originIata} />
                        <Itinerary originIata={flightInfo.second.originIata} totalDuration={flightInfo.second.totalDuration}
                            destinationIata={flightInfo.second.destinationIata} />
                        <DestinationFullDate destinationFulldate={flightInfo.second.destinationFulldate} airport={flightInfo.second.destinationIata} />
                    </div>
                    <ImgAirline airline={flightInfo.second.originCarrierCode} />
                </div>
            </div>
        )
    }
}

export default CardFlight