import React from 'react';
import './SearchBar.scss';
import InputDeparture from './InputDeparture/InputDeparture';

class SearchBar extends React.Component{
    render(){
        return(
            <div className='SearchBar'>
                <h1>Cheap Flights Best Deals</h1>
                <p>Search hundreds of travel sites at once</p>
                
                <InputDeparture />
                

            </div>
        )
    }
}
export default SearchBar;