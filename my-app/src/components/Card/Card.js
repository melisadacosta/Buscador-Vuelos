import React from 'react'
import { SearchBarContextConsumer } from 'components/Contexts/SearchBarContext'
import CardFlight from 'components/Card/CardFlight/CardFlight'


const Card = () => (
    <div className='Card'>
        <SearchBarContextConsumer>
            {
                ({ flight }) => (
                    flight.map(flightInfo =>
                        <CardFlight flightInfo={flightInfo} />)
                )
            }
        </SearchBarContextConsumer>
    </div>
)
export default Card