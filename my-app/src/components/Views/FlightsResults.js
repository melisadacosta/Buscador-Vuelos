import React from 'react'
import Nav from 'components/Nav/Nav';
import SearchBarResults from 'components/SearchBarResults/SearchBarResults';
import InputContextProvider from 'components/Contexts/InputContext';
import '../../styles/_styles.scss';
import Card from 'components/Card/Card'
import ContainerResults from 'components/ContainerResults/ContainerResults';

const FlightsResults = () => (
    <div className='FlightsResults'>
        <Nav />
        <InputContextProvider>
        <SearchBarResults />
        <Card />
        </InputContextProvider>
        <ContainerResults />
    </div>
)

export default FlightsResults;