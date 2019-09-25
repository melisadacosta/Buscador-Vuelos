import React from 'react'
import LinkFooterNav from 'components/LinkFooterNav/LinkFooterNav'
import './Footer.scss'
import SocialNetworks from './SocialNetworks/SocialNetworks';
import { faFacebookF, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className='Footer'>
        <div className='column'>
        <div className='FooterLinks'>
            <LinkFooterNav
                link='/'
                title='Hotels' />
            <LinkFooterNav
                link='/'
                title='Flights' />
            <LinkFooterNav
                link='/'
                title='Homes' />
            <LinkFooterNav
                link='/'
                title='Cars' />
            <LinkFooterNav
                link='/'
                title='Experiences' />
            <LinkFooterNav
                link='/'
                title='Abouts Us' />
            <LinkFooterNav
                link='/'
                title='Contact' />
        </div>
        <div className='social'>
            <SocialNetworks
                icon={faFacebookF}
                className= 'iconsList'
            />
            <SocialNetworks
                icon={faTwitter}
                className= 'iconsList'
            />
            <SocialNetworks
                icon={faGoogle}
                className= 'iconsList'
            />
            <SocialNetworks
                icon={faInstagram}
                className= 'iconsList'
            />
        </div>
        </div>
        <div className='Copyright'>
            <p>Copyright © 2019</p><Link to="/">Adantrip</Link><p>.All rights reserved. Programmed by Melisa Da Costa</p>
        </div>
    </div>
)

export default Footer;