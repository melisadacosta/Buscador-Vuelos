import React from 'react'
import './CheckboxGroup.scss'

const CheckboxGroup = ({ title, text, price, text1, text2, price1, price2 }) => (
    <div className='CheckboxGroup'>
        <ul className="unstyled centered">
            <li>
                <h3>{title}</h3>
                <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1" />
                <label for="styled-checkbox-1" >
                    <div className='items'>
                        <h4>{text}</h4>
                        <p>{price}</p>
                    </div>
                </label>
            </li>
            <li>
                <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value2" />
                <label for="styled-checkbox-2">
                    <div className='items'>
                        <h4>{text1}</h4>
                        <p>{price1}</p>
                    </div>
                </label>
            </li>
            <li>
                <input className="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value4" />
                <label for="styled-checkbox-4">
                    <div className='items'>
                        <h4>{text2}</h4>
                        <p>{price2}</p>
                    </div>
                </label>
            </li>
        </ul>
    </div>
)

export default CheckboxGroup