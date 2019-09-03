import React from 'react';
import './SearchBar.scss';
import InputDeparture from './InputDeparture/InputDeparture';
import InputArrival from './InputArrival/InputArrival';
import InputDateStart from 'components/SearchBar/InputDateStart/InputDateStart';
import InputDateEnd from './InputDateEnd/InputDateEnd';
import InputPassengers from './InputPassengers/InputPassengers';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputContextConsumer } from 'components/Contexts/InputContext';
import { SearchBarContextConsumer } from 'components/Contexts/SearchBarContext';

class SearchBar extends React.Component {
    render() {
        return (
            <div className='SearchBar'>
                <InputContextConsumer>
                    {
                        ({ updatetextIataOrigin, updatetextIataDest, updatetextFromDate,
                            updatetextToDate, updatetextAdults, textIataOrigin, textIataDest,
                            textFromDate, textToData, textAdults }) => (
                                <>
                                    <h1>Cheap Flights Best Deals</h1>
                                    <p>Search hundreds of travel sites at once</p>
                                    <div className='input-group'>
                                        <InputDeparture
                                            onChange={updatetextIataOrigin} value={textIataOrigin} />
                                        <InputArrival
                                            onChange={updatetextIataDest} value={textIataDest} />
                                        <InputDateStart
                                            onChange={updatetextFromDate} value={textFromDate} />
                                        <InputDateEnd
                                            onChange={updatetextToDate} value={textToData} />
                                        <InputPassengers
                                            onChange={updatetextAdults} value={textAdults} />

                                        <SearchBarContextConsumer>
                                            {
                                                ({ loadFlights }) => (
                                                    <div className='search'>
                                                        <button onClick={() => loadFlights(textIataOrigin , textIataDest, 
                                                            textFromDate, textToData, textAdults)} >
                                                            <FontAwesomeIcon icon={faAngleRight} />
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        </SearchBarContextConsumer>

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
                                </>
                            )

                    }
                </InputContextConsumer>
            </div>
        )
    }
}
export default SearchBar;