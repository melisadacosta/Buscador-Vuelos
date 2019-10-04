import React from 'react'
import Nav from 'components/Nav/Nav';
import '../../styles/_styles.scss';
import ContainerResults from 'components/ContainerResults/ContainerResults';
import FooterFlightResults from 'components/FooterFlightResults/FooterFlightResults';
import SearchBar from 'components/SearchBar/SearchBar';

const FlightsResults = () => (
    <div className='FlightsResults'>
        <Nav />
        <SearchBar />
        <ContainerResults />
        <div className='footer-flightsresults'>
        <FooterFlightResults />
        </div>
    </div>
)

export default FlightsResults;