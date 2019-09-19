import React from 'react'
import './ContainerResults.scss'
import CheckboxGroups from 'components/Checkbox/CheckboxGroups/CheckboxGroups'
import BarResults from 'components/BarResults/BarResults'
import AdvertisementAside from 'components/AdvertisementAside/AdvertisementAside'

const ContainerResults = () =>(
    <div className='ContainerResults'>
        <aside className='container-checkboxs'>
            <CheckboxGroups />
        </aside>
        <main className='list-results'>
            <BarResults />
        </main>
        <aside className='container-advertisement'>
            <AdvertisementAside />
        </aside>
    </div>
)

export default ContainerResults