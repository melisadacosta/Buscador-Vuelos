import React from 'react';
import InputRange from 'react-input-range';
import './InputRangePrice.scss'

class InputRangePrice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 100, max: 500 },
    };
  }
  render() {
    return (
      <form className="form">
        <h3>PRICE</h3>
        <InputRange
          maxValue={500}
          minValue={100}
          value={this.state.value}
          formatLabel={value => "$" + value}
          onChange={value => this.setState({ value })}
        />
      </form>
    );
  }
}

export default InputRangePrice