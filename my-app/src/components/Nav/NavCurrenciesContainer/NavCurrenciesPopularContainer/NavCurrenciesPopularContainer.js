import React from 'react'
import NavCurrenciesPopular from 'components/Nav/NavCurrenciesPopular/NavCurrenciesPopular'
import './NavCurrenciesPopularContainer.scss'

class NavCurrenciesPopularContainer extends React.Component {
    state = {
        popularcurrencies: []
    }
    componentDidMount = () => {
        fetch('https://adantrip-api.now.sh/currencies')
            .then(response => response.json())
            .then(data =>
                this.setState({ popularcurrencies: data.popular}))
    }
    render() {
        return (
            <div className='currencies-container'>
                <h4>Popular Currencies</h4>
                <div className='currency-container'>
                    {
                        this.state.popularcurrencies.map(popularcurrency => <NavCurrenciesPopular popularcurrency={popularcurrency} />)
                    }
                </div>
            </div>
        )
    }
}

export default NavCurrenciesPopularContainer