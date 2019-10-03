import React from 'react'
import './index.css'
// import Nav from 'components/Nav/Nav';
// import Flights from 'components/Flights/Flights';
import NoMatch from 'components/Views/NoMatch'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'components/Views/Home';
import FlightsResults from 'components/Views/FlightsResults';
import BookingFlight from 'components/Views/BookingFlight';
import './styles/_styles.scss';
import Nav from 'components/Nav/Nav';
import SearchBarContextProvider from 'components/Contexts/SearchBarContext';



const App = () => (
    <>
        <SearchBarContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/flights' component={FlightsResults} />
                    <Route path='/bookingflight' component={BookingFlight} />
                    <Route component={NoMatch} />
                </Switch>
            </BrowserRouter>
        </SearchBarContextProvider>
    </>
);

export default App
