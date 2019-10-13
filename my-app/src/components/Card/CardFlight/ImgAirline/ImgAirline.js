import React from 'react'

class ImgAirline extends React.Component {
    state = {
        airlineDescription: ""
    }
    render() {
        if (this.state.airlineDescription === "") {
            fetch(`https://aviation-edge.com/v2/public/airlineDatabase?key=a88f0f-51b498&codeIataAirline=${this.props.airline}`)
                .then(response => response.json())
                .then(res => this.setState({ airlineDescription: res[0].nameAirline }))
        }
        return (
            <div className='ImgAirline'>
                <div className='AirlineCode'>Operated by {this.state.airlineDescription}</div>
            </div>
        )
    }
}

export default ImgAirline