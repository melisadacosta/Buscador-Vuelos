import React from 'react'
import { InputContextConsumer } from 'components/Contexts/InputContext'
import { SearchBarContextConsumer } from 'components/Contexts/SearchBarContext'
import { withRouter } from 'react-router-dom'
import './ButtonLoadMore.scss'

const ButtonLoadMore = ({ history }) => (
    <div className='ButtonLoadMore'>
        <InputContextConsumer>
            {
                ({ textIataOrigin, textIataDest,
                    textFromDate, textToData, textAdults }) => (

                        <SearchBarContextConsumer>
                            {
                                ({ loadFlights }) => (
                                    <div className='search-more'>
                                        <button onClick={() => {
                                            loadFlights(textIataOrigin, textIataDest, textFromDate, textToData, textAdults)
                                            history.push('/flights')
                                        }}>
                                            LOAD MORE RESULTS
                                        </button>
                                    </div>
                                )
                            }
                        </SearchBarContextConsumer>
                    )
            }
        </InputContextConsumer>
    </div>
)

export default withRouter(ButtonLoadMore)
