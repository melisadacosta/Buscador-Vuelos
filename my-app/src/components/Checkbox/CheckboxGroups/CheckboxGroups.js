import React from 'react'
import Checkbox from 'components/Checkbox/Checkbox'
import InputRangePrice from 'components/Checkbox/InputRangePrice/InputRangePrice'
import './CheckboxGroups.scss'

const CheckboxGroups = () => (

    <div className='CheckboxGroup'>
        <div className='economy-group'>
            <Checkbox title='Stops' text='nonstop' price='$493' />
            <Checkbox text='1 stop' price='$300' />
            <Checkbox text='2 stops' price='$414' />
        </div>
        <div className='flight-group'>
            <Checkbox title='Flight Class' text='Economy' price='$316' />
            <Checkbox text='Business' price='$402' />
            <Checkbox text='First' price='$385' />
        </div>
        <div className='range-price'>
            <InputRangePrice />
        </div>
        <div className='takeoff-london'>
            <Checkbox title='Take-off London' text='Morning' price='$207' detail='05:00am - 11:59am' />
            <Checkbox text='Afternoon' price='$168' detail='12:00pm - 05:59pm'  />
            <Checkbox text='Evening' price='$439' detail='06:00pm - 11:59pm'  />
        </div>
        <div className='landing-newyork'>
            <Checkbox title='Landing New York' text='Morning' price='$454' detail='05:00am - 11:59am' />
            <Checkbox text='Afternoon' price='$172' detail='12:00pm - 05:59pm' />
            <Checkbox text='Evening' price='$361' detail='06:00pm - 11:59pm' />
        </div>
        <div className='takeoff-newyork'>
            <Checkbox title='Take-off New York' text='Morning' price='$423' detail='05:00am - 11:59am' />
            <Checkbox text='Afternoon' price='$235' detail='12:00pm - 05:59pm' />
            <Checkbox text='Evening' price='$408' detail='06:00pm - 11:59pm' />
        </div>
        <div className='landing-london'>
            <Checkbox title='Landing London' text='Morning' price='$116' detail='05:00am - 11:59am' />
            <Checkbox text='Afternoon' price='$283' detail='12:00pm - 05:59pm' />
            <Checkbox text='Evening' price='$274' detail='06:00pm - 11:59pm' />
        </div>
        <div className='airport-london'>
            <Checkbox title='LONDON AIRPORT' text='CLY: City' price='$476' />
            <Checkbox text='LHR: Heathrow' price='$304' />
            <Checkbox text='LCW: Gatwich' price='$245' />
            <Checkbox text='STN: Stansed' price='$198' />
            <Checkbox text='SEN: Southend' price='$454' />
        </div>
        <div className='airport-newyork'>
            <Checkbox title='New York AIRPORT' text='JFK: John F. Kennedy' price='$253' />
            <Checkbox text='LGA: LaGuardia' price='$212' />
            <Checkbox text='EWR: Newark Liberty' price='$384' />
        </div>
        <div className='airlines'>
            <Checkbox title='AIRLINES' text='KLM Royal Dutch...' price='$426' />
            <Checkbox text='LOT Polish Airlines' price='$179' />
            <Checkbox text='Wow Airlines' price='$105' />
            <Checkbox text='Virgin Atlantic...' price='$407' />
            <Checkbox text='Delta Airlines' price='$268' />
            <Checkbox text='SWISS Airlines' price='$348' />
            <Checkbox text='Lufthansa' price='$319' />
            <Checkbox text='American Airlines' price='$453' />
            <Checkbox text='Fly Emirates' price='$483' />
        </div>
    </div>
    // title='Flight Class'>

)

export default CheckboxGroups