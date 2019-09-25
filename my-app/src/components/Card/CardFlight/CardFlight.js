import React from 'react'
import OriginFullDate from 'components/Card/CardFlight/OriginFullDate/OriginFullDate'

const CardFlight = ({flightInfo}) =>(
    <div className='CardFlight'>
        <p>{flightInfo.price}</p>
        <p>{flightInfo.first.originFulldate}</p>
        {/* <OriginFullDate /> */}
    </div>
)

export default CardFlight