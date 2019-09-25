import React from 'react'
import LinkFooterFlight from 'components/LinkFooterNav/LinkFooterFlight/LinkFooterFlight'
import './FooterFlightResults.scss'
import adantripblack from 'assets/img/adantrip-black.png'
import FooterBar from './FooterBar/FooterBar'


const FooterFlightResults = () => (
    <div className='FooterFlightResults'>
        <div className='footer-container'>
        <div className='logo-container'>
            <div className='logo'>
            <img src={adantripblack} />
            </div>
            <div className='detail-company'>
                <p>Curabitur magnis cursus nam tempor quam risus urna mattis
                    porttitor lorem urna dolor vitae hac.<br/><br/>
                    Ultrices lacinia aliquet euismod aptent netus dis praesent
                    magna elit ultricies malesuada volutpat amet lacus</p>
            </div>
        </div>
        <div className='travel-mate-list'>
            <h4>Travel Mate</h4>
            <LinkFooterFlight
                link='/'
                title='About Travel Mate' />
            <LinkFooterFlight
                link='/'
                title='Mobile App' />
            <LinkFooterFlight
                link='/'
                title='Customer Support' />
            <LinkFooterFlight
                link='/'
                title='Advertising' />
            <LinkFooterFlight
                link='/'
                title='Jobs' />
            <LinkFooterFlight
                link='/'
                title='Privacy Policy' />
            <LinkFooterFlight
                link='/'
                title='Terms of Use' />
        </div>
        <div className='explore-list'>
        <h4>Expore</h4>
            <LinkFooterFlight
                link='/'
                title='Countries' />
            <LinkFooterFlight
                link='/'
                title='Regions' />
            <LinkFooterFlight
                link='/'
                title='Cities' />
            <LinkFooterFlight
                link='/'
                title='Districs' />
            <LinkFooterFlight
                link='/'
                title='Airports' />
            <LinkFooterFlight
                link='/'
                title='Hotels' />
            <LinkFooterFlight
                link='/'
                title='Place of Interest' />
        </div>
        <div className='book-list'>
        <h4>Book</h4>
            <LinkFooterFlight
                link='/'
                title='Apartaments' />
            <LinkFooterFlight
                link='/'
                title='Resorts' />
            <LinkFooterFlight
                link='/'
                title='Villas' />
            <LinkFooterFlight
                link='/'
                title='Hostels' />
            <LinkFooterFlight
                link='/'
                title='B&Bs' />
            <LinkFooterFlight
                link='/'
                title='Guesthouses' />
            <LinkFooterFlight
                link='/'
                title='Hotel Chains' />
        </div>
        <div className='section-subscription'>
            <div className='container-subscription'>
            <h3>Save up to 50% off your next trip</h3>
            <p>Subscribe to unlock our secret deals</p>
            <form>
            <input type='e-mail' placeholder='Type your e-mail here'/>
            <button className='button-subscription'>
                GET DEALS
            </button>
            </form>
            </div>
        </div>
    </div>
            
    <div className='footer-bar'>
        <FooterBar />
    </div>
    </div>
)

export default FooterFlightResults