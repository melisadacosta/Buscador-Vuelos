import React from 'react'
import NavCurrencies from 'components/Nav/NavCurrencies/NavCurrencies'
import './NavCurrenciesContainer.scss'

class NavCurrenciesContainer extends React.Component {
    state = {
        currencies: []
    }
    componentDidMount = () => {
        fetch('https://adantrip-api.now.sh/currencies')
            .then(response => response.json())
            .then(data =>
                this.setState({ currencies: data.all}))
    }
    render() {
        return (
            <div className='currencies-container'>
                <h4>All Currencies</h4>
                <div className='currency-container'>
                    {
                        this.state.currencies.map(currency => <NavCurrencies currency={currency} />)
                    }
                </div>
            </div>
        )
    }
}

export default NavCurrenciesContainer