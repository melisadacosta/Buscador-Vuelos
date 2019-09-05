import React from 'react'
import Nav from 'components/Nav/Nav';
import SearchBarResults from 'components/SearchBarResults/SearchBarResults';
import InputContextProvider from 'components/Contexts/InputContext';
import SearchBarContextProvider from 'components/Contexts/SearchBarContext';
import '../../styles/_styles.scss';
import StopsCheckbox from 'components/CheckboxGroup/StopsCheckbox/StopsCheckbox';
import FlightCheckbox from 'components/CheckboxGroup/FlightCheckbox/FlightCheckbox';

const FlightsResults = () => (
    <div className='FlightsResults'>
        <Nav />
        <InputContextProvider>
            <SearchBarContextProvider>
        <SearchBarResults />
                
            </SearchBarContextProvider>
        </InputContextProvider>
        <StopsCheckbox />
        <FlightCheckbox />
    </div>
)

export default FlightsResults;