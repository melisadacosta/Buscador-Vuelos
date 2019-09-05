import React from 'react'
import InputDeparture from 'components/SearchBarResults/InputDeparture/InputDeparture';
import './SearchBarResults.scss'
import InputArrival from 'components/SearchBarResults/InputArrival/InputArrival';


const SearchBarResults = () => (
    <div className='SearchBarResults'>
        <div className='input-group'>

         <InputDeparture />
         <InputArrival />
        </div>
         
    </div>
)

export default SearchBarResults