import React from 'react'
import Nav from 'components/Nav/Nav';
import SearchBarResults from 'components/SearchBarResults/SearchBarResults';
import InputContextProvider from 'components/Contexts/InputContext';
import '../../styles/_styles.scss';
import Card from 'components/Card/Card'
import ContainerResults from 'components/ContainerResults/ContainerResults';
import FooterFlightResults from 'components/FooterFlightResults/FooterFlightResults';

const FlightsResults = () => (
    <div className='FlightsResults'>
        <Nav />
        <InputContextProvider>
            <SearchBarResults />
        </InputContextProvider>
        <ContainerResults />
        <div className='footer-flightsresults'>
        <FooterFlightResults />
        </div>
    </div>
)

export default FlightsResults;