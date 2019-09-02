import React from 'react'
import Flights from 'components/Flights/Flights';
import ServicesOptions from 'components/Services/ServicesOptions/ServicesOptions';
import SearchBar from 'components/SearchBar/SearchBar';
import '../../styles/_styles.scss';
import Footer from 'components/Footer/Footer';


const Home = () => (
    <div className='Home'>
        <Flights />
        <SearchBar />
        <ServicesOptions />
        <Footer />
    </div>
)

export default Home;