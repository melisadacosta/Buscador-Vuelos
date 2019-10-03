import React from 'react';
import './SearchBar.scss';
import { withRouter } from 'react-router-dom'
import { InputContextConsumer } from 'components/Contexts/InputContext';
import Input, { INPUT_SIZES } from 'components/Input/Input';
import { SearchBarContextConsumer } from 'components/Contexts/SearchBarContext'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputRadio from './InputRadio/InputRadio';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
    redirect = () => {
        this.props.history.push('/flights')
    }
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
                                        <Input icon={faMapMarkerAlt} name={'departure'} typeInput={'text'}
                                            placeholder={'Departure'} type={INPUT_SIZES.BIG}
                                            onChange={updatetextIataOrigin} value={textIataOrigin} />
                                        <Input icon={faMapMarkerAlt} name={'arrival'} typeInput={"text"}
                                            placeholder={'Arrival'} type={INPUT_SIZES.BIG}
                                            onChange={updatetextIataDest} value={textIataDest} />
                                        <Input icon={faCalendarAlt} name={'date'} typeInput={"date"}
                                            type={INPUT_SIZES.SMALL} onChange={updatetextFromDate} value={textFromDate} />
                                        <Input icon={faCalendarAlt} name={'date'} typeInput={"date"}
                                            type={INPUT_SIZES.SMALL} onChange={updatetextToDate} value={textToData} />
                                        <Input icon={faUserFriends} name={'departure'} typeInput={"number"}
                                            placeholder={'1'} type={INPUT_SIZES.SMALL}
                                            onChange={updatetextAdults} value={textAdults} />

                                        <SearchBarContextConsumer>
                                            {
                                                ({ loadFlights }) => (
                                                    <div className='search'>
                                                        <button className='button-search' onClick={() => {
                                                            loadFlights(textIataOrigin, textIataDest, textFromDate, textToData, textAdults)
                                                            this.redirect()
                                                        }}>
                                                            <FontAwesomeIcon icon={faAngleRight} />
                                                        </button>
                                                        <button className='button-responsive' onClick={() => {
                                                            loadFlights(textIataOrigin, textIataDest, textFromDate, textToData, textAdults)
                                                            this.redirect()
                                                        }}>
                                                            Search
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        </SearchBarContextConsumer>

                                    </div>
                                    <InputRadio />
                                </>
                            )
                    }
                </InputContextConsumer>
            </div>
        )
    }
}
export default withRouter(SearchBar)