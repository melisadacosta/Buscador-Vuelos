import React from 'react'
import Nav from 'components/Nav/Nav';
import SearchBarResults from 'components/SearchBarResults/SearchBarResults';
import InputContextProvider from 'components/Contexts/InputContext';
import SearchBarContextProvider from 'components/Contexts/SearchBarContext';
import '../../styles/_styles.scss';

const FlightsResults = () => (
    <div className='FlightsResults'>
        <Nav />
        <InputContextProvider>
            <SearchBarContextProvider>
        <SearchBarResults />
                
            </SearchBarContextProvider>
        </InputContextProvider>
    </div>
)

export default FlightsResults;