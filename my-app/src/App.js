import React from 'react'
import './index.css'
import NoMatch from 'components/Views/NoMatch'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'components/Views/Home';
import FlightsResults from 'components/Views/FlightsResults';
import BookingFlight from 'components/Views/BookingFlight';
import './styles/_styles.scss';
import SearchBarContextProvider from 'components/Contexts/SearchBarContext';
import InputContextProvider from 'components/Contexts/InputContext';


const App = () => (
    <>
        <InputContextProvider>
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
        </InputContextProvider>
    </>
);

export default App
