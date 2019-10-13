import React from 'react'
import './ContainerResults.scss'
import CheckboxGroups from 'components/Checkbox/CheckboxGroups/CheckboxGroups'
import BarResults from 'components/BarResults/BarResults'
import AdvertisementAside from 'components/AdvertisementAside/AdvertisementAside'
import Card from 'components/Card/Card'
import AdvertisementLeft from 'components/AdvertisementAside/AdvertisementLeft/AdvertisementLeft'
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore'


const ContainerResults = () => (
    <div className='ContainerResults'>
        <aside className='container-checkboxs'>
            <CheckboxGroups />
            <AdvertisementLeft />
        </aside>
        <main className='list-results'>
            <BarResults />
            <Card />
            <ButtonLoadMore />
        </main>
        <aside className='container-advertisement'>
            <AdvertisementAside />
        </aside>
    </div>
)

export default ContainerResults