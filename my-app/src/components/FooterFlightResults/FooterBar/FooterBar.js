import React from 'react'
import SocialNetworks from 'components/Footer/SocialNetworks/SocialNetworks'
import { Link } from 'react-router-dom';
import { faFacebookF, faTwitter, faInstagram, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './FooterBar.scss'

const FooterBar = () => (
    <div className='FooterBar'>
        <div className='container-footerbar'>
            <div className='Copyright'>
                <p>Copyright © 2019</p><Link to="/">Adantrip</Link><p>.All rights reserved. Programmed by Melisa Da Costa</p>
            </div>
            <div className='social-networks'>
                <SocialNetworks
                    icon={faFacebookF}
                    className='iconsLists'
                />
                <SocialNetworks
                    icon={faGoogle}
                    className='iconsLists'
                />
                <SocialNetworks
                    icon={faTwitter}
                    className='iconsLists'
                />
                <SocialNetworks
                    icon={faYoutube}
                    className='iconsLists'
                />
                <SocialNetworks
                    icon={faInstagram}
                    className='iconsLists'
                />
            </div>
        </div>
    </div>
)

export default FooterBar