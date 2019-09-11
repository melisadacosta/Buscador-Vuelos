import React from 'react'
import { SearchBarContextConsumer } from 'components/Contexts/SearchBarContext'
import CardFlight from 'components/Card/CardFlight/CardFlight'

const Card = () =>(
    <div className= 'CardFlight'>
        <SearchBarContextConsumer>
            <div>
            {
                ({flight}) =>(
                    <>
                        {
                     flight.map(flightInfo => 
                        <CardFlight flightInfo={flightInfo} />)
                    
                }
                    </>
                )
            }
            </div>
        </SearchBarContextConsumer>
     </div>
)

export default Card