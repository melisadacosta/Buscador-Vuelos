import React from 'react'
import NavLanguages from 'components/Nav/NavLanguages/NavLanguages'
import './NavLanguageContainer.scss'

class NavLanguageContainer extends React.Component {
  state = {
    languages: []
  }
  componentDidMount = () => {
    fetch('https://adantrip-api.now.sh/languages')
      .then(response => response.json())
      .then(data =>
        this.setState({ languages: data }))
  }
  
  render() {
    return (
      <div className='languages-container'>
        <h4>Languages</h4>
        <div className='flags-container'>
          {
            this.state.languages.map(language => <NavLanguages language={language} />)
          }
        </div>
      </div>
    )
  }
}
// {/* <div onClick={this.componentLanguage}>Cargar</div> */}

export default NavLanguageContainer;
