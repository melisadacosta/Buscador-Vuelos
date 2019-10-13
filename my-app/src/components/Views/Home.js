import React from 'react'
import ServicesOptions from 'components/Services/ServicesOptions/ServicesOptions';
import '../../styles/_styles.scss';
import { INPUT_SIZES } from 'components/Input/Input';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import NavResponsive from 'components/Nav/NavResponsive/NavResponsive';
import SearchBarTemplete from 'components/SearchBarTemplete/SearchBarTemplete';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import InputRadio from 'components/SearchBarTemplete/InputRadio/InputRadio';

const Home = () => (
    <div className='Home'>
        <div className='Nav'>
            <Nav />
        </div>
        <div className='NavResponsive'>
            <NavResponsive />
        </div>
        <SearchBarTemplete
            title={'Cheap Flights Best Deals'}
            subtitle={'Search hundreds of travel sites at once'}
            classNameInputGroup={'input-group'}
            className1={INPUT_SIZES.BIG}
            className2={INPUT_SIZES.BIG}
            className3={INPUT_SIZES.SMALL}
            className4={INPUT_SIZES.SMALL}
            className5={INPUT_SIZES.SMALL}
            classNameButton={'button-search'}
            iconButton={faAngleRight}
            classNameButtonRes={'button-responsive'}
            text1={'Search'}
        />
        <InputRadio className={'classNameHome'} />
        <ServicesOptions />
        <Footer />
    </div>
)

export default Home;