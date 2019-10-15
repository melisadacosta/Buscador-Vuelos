import React from 'react'
import '../../styles/_styles.scss';
import ContainerResults from 'components/ContainerResults/ContainerResults';
import FooterFlightResults from 'components/FooterFlightResults/FooterFlightResults';
import SectionNavSearch from 'components/SectionNavSearch/SectionNavSearch';

const FlightsResults = () => (
    <div className='FlightsResults'>
        <SectionNavSearch />
        <div className='container-results'>
        <ContainerResults />
        </div>
        <div className='footer-flightsresults'>
            <FooterFlightResults />
        </div>
    </div>
)

export default FlightsResults;