import React from 'react'
import ServicesOptions from 'components/Services/ServicesOptions/ServicesOptions';
import SearchBar from 'components/SearchBar/SearchBar';
import '../../styles/_styles.scss';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import NavResponsive from 'components/Nav/NavResponsive/NavResponsive';


const Home = () => (
    <div className='Home'>
        <div className='NavHome'>
            <Nav />
        </div>
        <div className='NavResponsiveHome'>
            <NavResponsive />
        </div>
        <SearchBar />
        <ServicesOptions />
        <Footer />
    </div>
)

export default Home;