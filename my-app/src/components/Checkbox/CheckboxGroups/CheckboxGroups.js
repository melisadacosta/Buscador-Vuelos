import React from 'react'
import Checkbox from 'components/Checkbox/Checkbox'

const CheckboxGroups = () => (

    <div className='CheckboxGroup'>
        <div className='economy-group'>
            <Checkbox
                title='Economy'
                text='nonstop'
                price='$493' />
            <Checkbox
                text='1 stop'
                price='$300' />
            <Checkbox
                text='2 stops'
                price='$414' />
        </div>
        <div className='flight-group'>
            <Checkbox
                title='Flight Class'
                text='Economy'
                price='$316' />
            <Checkbox
                text='Business'
                price='$402' />
            <Checkbox
                text='First'
                price='$385' />
        </div>
    </div>
    // title='Flight Class'>

)

export default CheckboxGroups