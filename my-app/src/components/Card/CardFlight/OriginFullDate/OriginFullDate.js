import React from 'react'

const originFulldate = ({flightInfo}) =>(
    <div className='originFulldate'>
        <p>{flightInfo.first.originFulldate}</p>
        <p>{flightInfo.first.destinationFulldate}</p>
    </div>
)

export default originFulldate