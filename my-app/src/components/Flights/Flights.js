import React from 'react';

const API_KEY = "bMEJxLyCvtVEW9yd9CpEQ1OeKoTwATFQ";
const API_SECRET = "K41txsGiVxxXS66V"

// función para transformar el objeto de datos a un FormData
const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

// datos para obtener el access token
const item = {
 grant_type: 'client_credentials',
 client_id: API_KEY,
 client_secret: API_SECRET
};

let iataOrigin = 'SYD';
let iataDest = 'BBK';
let fromDate = '2020-01-01';
let toData = '2020-01-05';
let adults = 2;



class Flights extends React.Component {
    state = {
        flights:[]
    }
    loadFlights = () => {
        fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: toUrlEncoded(item)
        })
            .then(res => res.json())
            .then(data => {
                // cuando la API nos responde, podemos guardarnos ese código que vamos a utilizarlo para hacer el fetch a la API de Amadeus
                // como este token vence cada cierto tiempo, por seguridad, siempre vamos a tener que obtener uno nuevo antes de llamar a la API
                const accessToken = data.access_token;

                // haga el pedido a la API de Amadeus para obtener unos vuelvos de ejemplo
                fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataOrigin}&destinationLocationCode=${iataDest}&departureDate=${fromDate}&returnDate=${toData}&adults=${adults}&max=5`, {
                    // el header es para enviarle ese token a la API
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        // cuando la API nos responde, obtenemos el objeto general que tiene todos los datos
                        // console.log(data)
                        // const info = data.data.map(flight => `${flight.id} ${flight.source}`);
                        // this.setState({flight: info})
                        this.updateFlightsInfo(data.data)       
                    })
            })
    }
    updateFlightsInfo = data =>{
        const flightInfo = data.map (flight =>{ return{
            id: flight.id , 
            price: flight.price.total,
            itineraries: flight.iteneraries
        }
        })
        this.setState({flights : flightInfo})
    }
    render() {
        return (
            <>
            {/* {
                this.state.flights.map(flight => <p>{flight}</p>)
            } */}
            {
                this.state.flights.map(flight => (
                    <div key ={flight.id}>
                        <p>{flight.price}</p>
                    </div>
                ))
            }
                {/* <button onClick={this.loadFlights}>Cargar vuelos</button> */}

            </>)
    }
}

export default Flights;