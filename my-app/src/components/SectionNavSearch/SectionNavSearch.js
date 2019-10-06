import React from 'react'
import './SectionNavSearch.scss'
import SearchBarTemplete from 'components/SearchBarTemplete/SearchBarTemplete'
import InputRadio from 'components/SearchBarTemplete/InputRadio/InputRadio'
import { INPUT_SIZES } from 'components/Input/Input';
import Nav from 'components/Nav/Nav'

const SectionNavSearch = () =>(
    <div className='SectionSearchNav'>
        <div className='background-container'>
            <div className='flight-background'></div>
            </div>
            <div className='flight-section-container'>
            <Nav />
            <SearchBarTemplete
                classNameInputGroup={'input-group-flight'}
                labelinput={'label-input'}
                label1={'From'}
                className1={INPUT_SIZES.BIG_RESULTS}
                label2={'To'}
                className2={INPUT_SIZES.BIG_RESULTS}
                label3={'Depart'}
                className3={INPUT_SIZES.SMALL_RESULTS}
                label4={'Arrival'}
                className4={INPUT_SIZES.SMALL_RESULTS}
                label5={'Passengers'}
                className5={INPUT_SIZES.SMALL_RESULTS}
                classNameButton={'button-search-flights'}
                text={'EDIT'}
                classNameButtonRes={'button-responsive'}
                text1={'Search'} />
            <InputRadio className={'classNameFlights'} />
            </div>
    </div>
)

export default SectionNavSearch