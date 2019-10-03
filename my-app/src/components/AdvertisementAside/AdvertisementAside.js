import React from 'react'
import publicidad1 from 'assets/img/publicidad1.jpg'
import publicidad2 from 'assets/img/publicidad2.jpg'
import './AdvertisementAside.scss'

const AdvertisementAside = () => (
    <div className='AdvertisementAside'>
        <div className='advertisement'>
            <p>Advertisement</p>
            <img src={publicidad1} alt='' />
        </div>
        <div className='advertisement'>
            <p>Advertisement</p>
            <img src={publicidad2} alt='' />
        </div>
        
    </div>
)

export default AdvertisementAside