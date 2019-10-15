import React from 'react'
import './Checkbox.scss'


class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: props.disabled
        };
    }
    _handleChange = () => {
        this.setState({
            checked: !this.state.checked
        });
    };
    render() {
        const { disabled, text, price, title, detail } = this.props;
        const { checked } = this.state;

        return (
            <div className="React__checkbox">
                <label>
                    <h3>{title}</h3>
                    <input
                        type="checkbox"
                        className="React__checkbox--input"
                        checked={checked}
                        disabled={disabled}
                        onChange={this._handleChange}
                    />

                    <span className="React__checkbox--span">
                        <div className='items-column'>
                            <div className='items'>
                                <h4>{text}</h4>
                                <p>{price}</p>
                            </div>

                        </div>
                    </span>
                    <div className='item-span'>
                        <p>{detail}</p>
                    </div>
                </label>
            </div>
        );
    }
}

export default Checkbox