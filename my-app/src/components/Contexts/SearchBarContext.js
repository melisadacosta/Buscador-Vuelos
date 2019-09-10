import React from 'react'

const API_KEY = "bMEJxLyCvtVEW9yd9CpEQ1OeKoTwATFQ";
const API_SECRET = "K41txsGiVxxXS66V"

const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');


const item = {
    grant_type: 'client_credentials',
    client_id: API_KEY,
    client_secret: API_SECRET
};

// let iataOrigin = 'EZE';
// let iataDest = 'BBK';
// let fromDate = '2020-01-01';
// let toData = '2020-01-05';
// let adults = 2;

const SearchBarContext = React.createContext()

class SearchBarContextProvider extends React.Component {
    state = {
        flights: []
    }
    
    loadFlights = (iataOrigin, iataDest, fromDate, toData, adults ) => {
        fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: toUrlEncoded(item)
        })
            .then(res => res.json())
            .then(data => {

                const accessToken = data.access_token;

                fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataOrigin}&destinationLocationCode=${iataDest}&departureDate=${fromDate}&returnDate=${toData}&adults=${adults}&max=5`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.updateFlightsInfo(data.data)
                        console.log(data.data)
                    })
            })
    }
    updateFlightsInfo = data => {
        const flightInfo = data.map(flight => {
            return {
                id: flight.id,
                price: flight.price.total,
                itineraries: flight.iteneraries
            }
        })
        this.setState({ flights: flightInfo })
    }
    render() {
        return (
            <SearchBarContext.Provider
                value={{
                    flight: this.state.flights,
                    loadFlights: this.loadFlights,
                    updateFlightsInfo: this.updateFlightsInfo
                }}>

                {/* {
                    this.state.flights.map(flight => (
                        <div key={flight.id}>
                            <p>{flight.price}</p>
                        </div>
                    ))
                } */}
                {this.props.children}
            </SearchBarContext.Provider>
        )
    }
}
export const SearchBarContextConsumer = SearchBarContext.Consumer
export default SearchBarContextProvider