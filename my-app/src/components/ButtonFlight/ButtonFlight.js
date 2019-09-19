import React from 'react'

const ButtonFlight = (name, type, text, className) =>(
    <div className='Button'>
        <button
                        name={name}
                        type={type}
                        text={text}
                        className={className}
                    />
    </div>
)

export default ButtonFlight
