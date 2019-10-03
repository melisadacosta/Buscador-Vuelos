import React from 'react'
import ServicesOptions from 'components/Services/ServicesOptions/ServicesOptions';
import SearchBar from 'components/SearchBar/SearchBar';
import '../../styles/_styles.scss';
import Footer from 'components/Footer/Footer';
import InputContextProvider from 'components/Contexts/InputContext';
import Nav from 'components/Nav/Nav';


const Home = () => (
    <div className='Home'>
        <Nav />
        <InputContextProvider>
            {/* <SearchBarContextProvider> */}
                <SearchBar />
            {/* </SearchBarContextProvider> */}
        </InputContextProvider>
        <ServicesOptions />
        <Footer />
    </div>
)

export default Home;