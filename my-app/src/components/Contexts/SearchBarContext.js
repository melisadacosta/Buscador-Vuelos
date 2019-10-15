import React from 'react'


const API_KEY = "bMEJxLyCvtVEW9yd9CpEQ1OeKoTwATFQ";
const API_SECRET = "K41txsGiVxxXS66V"

const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');


const item = {
    grant_type: 'client_credentials',
    client_id: API_KEY,
    client_secret: API_SECRET
};



const SearchBarContext = React.createContext()

class SearchBarContextProvider extends React.Component {
    state = {
        flights: [],
    }

    loadFlights = (textIataOrigin, textIataDest, textFromDate, textToData, textAdults) => {
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

                fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${textIataOrigin}&destinationLocationCode=${textIataDest}&departureDate=${textFromDate}&returnDate=${textToData}&adults=${textAdults}&max=50`, {
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
        var iso8601DurationRegex = /(-)?P(?:([\.,\d]+)Y)?(?:([\.,\d]+)M)?(?:([\.,\d]+)W)?(?:([\.,\d]+)D)?T(?:([\.,\d]+)H)?(?:([\.,\d]+)M)?(?:([\.,\d]+)S)?/;
        let parseISO8601Duration = function (iso8601Duration) {
            var matches = iso8601Duration.match(iso8601DurationRegex);
            return {
                sign: matches[1] === undefined ? '+' : '-', years: matches[2] === undefined ? 0 : matches[2], months: matches[3] === undefined ? 0 : matches[3], weeks: matches[4] === undefined ? 0 : matches[4], days: matches[5] === undefined ? 0 : matches[5], hours: matches[6] === undefined ? 0 : matches[6], minutes: matches[7] === undefined ? 0 : matches[7], seconds: matches[8] === undefined ? 0 : matches[8]
            };
        };

        const flightInfo = data.map(flight => {
            return {
                id: flight.id,
                price: flight.price.total,
                classFlight: flight.travelerPricings[0].fareDetailsBySegment[0].cabin,

                first: {
                    originFulldate: flight.itineraries[0].segments[0].departure.at,
                    destinationFulldate: flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.at,
                    totalDuration: parseISO8601Duration(flight.itineraries[0].duration).hours + "h " + parseISO8601Duration(flight.itineraries[0].duration).minutes + "m",
                    originIata: flight.itineraries[0].segments[0].departure.iataCode,
                    destinationIata: flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode,
                    originCount: flight.itineraries[0].segments.length,
                    originIntermediateIata: flight.itineraries[0].segments[0].arrival.iataCode,
                    originCarrierCode: flight.itineraries[0].segments[0].carrierCode,
                    // destinationCarrierCode: flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].carrierCode,

                },
                second: {
                    originFulldate: flight.itineraries[1].segments[0].departure.at,
                    destinationFulldate: flight.itineraries[1].segments[flight.itineraries[1].segments.length - 1].arrival.at,
                    totalDuration: parseISO8601Duration(flight.itineraries[1].duration).hours + "h " + parseISO8601Duration(flight.itineraries[1].duration).minutes + "m",
                    originIata: flight.itineraries[1].segments[0].departure.iataCode,
                    destinationIata: flight.itineraries[1].segments[flight.itineraries[1].segments.length - 1].arrival.iataCode,
                    originCount: flight.itineraries[1].segments.length,
                    originIntermediateIata: flight.itineraries[1].segments[0].arrival.iataCode,
                    originCarrierCode: flight.itineraries[1].segments[0].carrierCode,
                    // destinationCarrierCode: flight.itineraries[1].segments[flight.itineraries[0].segments.length - 1].carrierCode
                }
            }

        }
        )
        this.setState({ flights: flightInfo })
        console.log(flightInfo);

    }


    render() {
        return (
            <SearchBarContext.Provider
                value={{
                    flight: this.state.flights,
                    loadFlights: this.loadFlights,
                    updateFlightsInfo: this.updateFlightsInfo,
                }}>
                {this.props.children}
            </SearchBarContext.Provider>
        )
    }
}
export const SearchBarContextConsumer = SearchBarContext.Consumer
export default SearchBarContextProvider