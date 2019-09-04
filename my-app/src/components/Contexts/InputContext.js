import React from 'react'

const InputContext = React.createContext()

class InputContextProvider extends React.Component {
  state = {
    textIataOrigin: '',
    textIataDest: '',
    textFromDate: '',
    textToData: '', 
    textAdults: ''
  }
  updatetextIataOrigin = event => {
    this.setState({ textIataOrigin: event.target.value })
  }
  updatetextIataDest = event => {
    this.setState({ textIataDest: event.target.value })
  }
  updatetextFromDate = event => {
    this.setState({ textFromDate: event.target.value })
  }
  updatetextToDate = event => {
    this.setState({ textToData: event.target.value })
  }
  updatetextAdults = event => {
    this.setState({ textAdults: event.target.value })
  }
  render() {
    return (
      <InputContext.Provider
        value={{
          textIataOrigin: this.state.textIataOrigin,
          updatetextIataOrigin: this.updatetextIataOrigin,
          textIataDest: this.state.textIataDest,
          updatetextIataDest: this.updatetextIataDest,
          textFromDate: this.state.textFromDate,
          updatetextFromDate: this.updatetextFromDate,
          textToData: this.state.textToData,
          updatetextToDate: this.updatetextToDate,
          textAdults: this.state.textAdults,
          updatetextAdults: this.updatetextAdults
        }}>
        {this.props.children}
      </InputContext.Provider>
    )
  }
}

export const InputContextConsumer = InputContext.Consumer
export default InputContextProvider