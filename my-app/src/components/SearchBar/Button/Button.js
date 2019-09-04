import React from 'react'
import { InputContextConsumer } from 'components/Contexts/InputContext'
import { SearchBarContextConsumer } from 'components/Contexts/SearchBarContext'
import { withRouter } from 'react-router-dom'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ history }) => (
    <div className='Button'>
        <InputContextConsumer>
            {
                ({ textIataOrigin, textIataDest,
                    textFromDate, textToData, textAdults }) => (

                        <SearchBarContextConsumer>
                            {
                                ({ loadFlights }) => (
                                    <div className='search'>
                                        <button onClick={() => {
                                            loadFlights(textIataOrigin, textIataDest, textFromDate, textToData, textAdults)
                                            history.push('/flights')
                                        }}>
                                            <FontAwesomeIcon icon={faAngleRight} />
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

export default withRouter(Button)
