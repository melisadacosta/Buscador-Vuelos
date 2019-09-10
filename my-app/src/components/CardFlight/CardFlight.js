import React from 'react'
import { SearchBarContextConsumer } from 'components/Contexts/SearchBarContext'

const CardFlight = () =>(
    <div className= 'CardFlight'>
        <SearchBarContextConsumer>
            {
            ({updateFlightsInfo}) =>(
                <>
                    <p>{updateFlightsInfo.id}</p>
                    <h1>{updateFlightsInfo.price}</h1>
                </>
            )
            }
        </SearchBarContextConsumer>
    </div>
)

export default CardFlight