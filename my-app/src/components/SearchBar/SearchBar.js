import React from 'react';
import './SearchBar.scss';
import InputDeparture from './InputDeparture/InputDeparture';
import InputArrival from './InputArrival/InputArrival';
import InputDateStart from 'components/SearchBar/InputDateStart/InputDateStart';
import InputDateEnd from './InputDateEnd/InputDateEnd';
import InputPassengers from './InputPassengers/InputPassengers';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBar extends React.Component {
    render() {
        return (
            <div className='SearchBar'>
                <h1>Cheap Flights Best Deals</h1>
                <p>Search hundreds of travel sites at once</p>
                <div className='input-group'>
                    <InputDeparture />
                    <InputArrival />
                    <InputDateStart />
                    <InputDateEnd />
                    <InputPassengers />
                    <div className='search'>
                        <button>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                </div>
                <div className='input-check'>
                    <label className="container">Round Trip
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                    </label>

                    <label className="container">One Way
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        )
    }
}
export default SearchBar;