import React from 'react'
import publi from 'assets/img/publi.jpg'
import './AdvertisementLeft.scss'

const AdvertisementLeft = () => (
    <div className='AdvertisementLeft'>
        <div className='advertisement'>
            <p>Advertisement</p>
            <img src={publi} alt='' />
        </div>
    </div>
)

export default AdvertisementLeft