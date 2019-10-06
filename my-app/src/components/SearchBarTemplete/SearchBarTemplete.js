import React from 'react'
import { withRouter } from 'react-router-dom'
import { InputContextConsumer } from 'components/Contexts/InputContext';
import Input from 'components/Input/Input';
import { SearchBarContextConsumer } from 'components/Contexts/SearchBarContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchBarTemplete.scss'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


export const INPUT_SIZES = {
    SMALL: 'small',
    BIG: 'big',
    BIG_RESULTS: 'big-results',
    SMALL_RESULTS: 'small-results'
}

class SearchBarTemplete extends React.Component {
    redirect = () => {
        this.props.history.push('/flights')
    }
    render() {
        const { title, subtitle, classNameButton, className1, className2, className3, className4, className5,
            iconButton, text, classNameButtonRes, text1, classNameInputGroup, label1, label2,
            label3, label4, label5, labelinput } = this.props
        return (
            <div className='SearchBarTemplete'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <InputContextConsumer>
                    {
                        ({ updatetextIataOrigin, updatetextIataDest, updatetextFromDate,
                            updatetextToDate, updatetextAdults, textIataOrigin, textIataDest,
                            textFromDate, textToData, textAdults }) => (
                                <>

                                    <div className={classNameInputGroup}>
                                        <div className={labelinput}>
                                            <label>{label1}</label>
                                            <div className={className1}>
                                                <Input icon={faMapMarkerAlt} name={'departure'} typeInput={'text'}
                                                    placeholder={'Departure'}
                                                    onChange={updatetextIataOrigin} value={textIataOrigin} />
                                            </div>
                                        </div>
                                        <div className={labelinput}>
                                            <label>{label2}</label>
                                            <div className={className2}>
                                                <Input icon={faMapMarkerAlt} name={'arrival'} typeInput={"text"}
                                                    placeholder={'Arrival'}
                                                    onChange={updatetextIataDest} value={textIataDest} />
                                            </div>
                                        </div>
                                        <div className={labelinput}>
                                            <label>{label3}</label>
                                            <div className={className3}>
                                                <Input icon={faCalendarAlt} name={'date'} typeInput={"date"}
                                                    onChange={updatetextFromDate} value={textFromDate} />
                                            </div>
                                        </div>
                                        <div className={labelinput}>
                                            <label>{label4}</label>
                                            <div className={className4}>
                                                <Input icon={faCalendarAlt} name={'date'} typeInput={"date"}
                                                    onChange={updatetextToDate} value={textToData} />
                                            </div>
                                        </div>
                                        <div className={labelinput}>
                                            <label>{label5}</label>
                                            <div className={className5}>
                                                <Input icon={faUserFriends} name={'departure'} typeInput={"number"}
                                                    placeholder={'1'}
                                                    onChange={updatetextAdults} value={textAdults} />
                                            </div>
                                        </div>
                                        <SearchBarContextConsumer>
                                            {
                                                ({ loadFlights }) => (
                                                    <div className='search'>
                                                        <button className={classNameButton} onClick={() => {
                                                            loadFlights(textIataOrigin, textIataDest, textFromDate, textToData, textAdults)
                                                            this.redirect()
                                                        }}>
                                                            {text}
                                                            <FontAwesomeIcon icon={iconButton} />
                                                        </button>
                                                        <button className={classNameButtonRes} onClick={() => {
                                                            loadFlights(textIataOrigin, textIataDest, textFromDate, textToData, textAdults)
                                                            this.redirect()
                                                        }}>
                                                            {text1}
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        </SearchBarContextConsumer>
                                    </div>

                                </>
                            )
                    }
                </InputContextConsumer>
            </div>
        )
    }
}

export default withRouter(SearchBarTemplete)