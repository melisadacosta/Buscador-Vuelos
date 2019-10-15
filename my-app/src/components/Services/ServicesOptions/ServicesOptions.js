import React from 'react'
import Services from 'components/Services/Services';
import './ServicesOptions.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ServicesOptions = () => (
    <div className="ServicesOptions">
        <Services
            icon={faCheckCircle}
            title='Explore the World'
            text='Start to discrover. We will help you to visit any place you can imagine' />

        <Services
            icon={faCheckCircle}
            title='Gifts & Rewards'
            text='Get even more from our service. Spend less and travel more' />

        <Services
            icon={faCheckCircle}
            title='Best prices'
            text='We are comparing hundreds travel websites to find best price for you' />

        <Services
            icon={faCheckCircle}
            title='27/7 Support'
            text='Contact us anytime, anywhere. We will resolve any issues ASAP' />
    </div>
)

export default ServicesOptions;