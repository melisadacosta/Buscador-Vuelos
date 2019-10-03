import React from 'react';
import { InputContextConsumer } from 'components/Contexts/InputContext';
import Button from 'components/SearchBar/Button/Button';
import Input, { INPUT_SIZES } from 'components/Input/Input';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


class SearchBarResults extends React.Component {
    render() {
        return (
            <div className='SearchBar'>
                <InputContextConsumer>
                    {
                        ({ updatetextIataOrigin, updatetextIataDest, updatetextFromDate,
                            updatetextToDate, updatetextAdults, textIataOrigin, textIataDest,
                            textFromDate, textToData, textAdults }) => (
                                    <div className='input-group'>
                                        <Input icon= {faMapMarkerAlt} name={'departure'} typeInput= {'text'}
                                            placeholder={'Departure'} type={INPUT_SIZES.BIG}
                                            onChange={updatetextIataOrigin} value={textIataOrigin} />
                                        <Input icon={faMapMarkerAlt} name={'arrival'} typeInput={"text"}
                                            placeholder={'Arrival'} type={INPUT_SIZES.BIG}
                                            onChange={updatetextIataDest} value={textIataDest} />
                                        <Input icon={faCalendarAlt} name={'date'} typeInput={"date"}
                                            type={INPUT_SIZES.SMALL} onChange={updatetextFromDate} value={textFromDate} />
                                        <Input icon={faCalendarAlt} name={'date'} typeInput={"date"}
                                            type={INPUT_SIZES.SMALL} onChange={updatetextToDate} value={textToData} />
                                        <Input icon= {faUserFriends} name={'departure'} typeInput= {"number"}
                                            placeholder={'1'} type={INPUT_SIZES.SMALL}
                                            onChange={updatetextAdults} value={textAdults} />
                                        <Button />

                                    </div>
                                    
                                
                            )
                    }
                </InputContextConsumer>
            </div>
        )
    }
}

export default SearchBarResults;