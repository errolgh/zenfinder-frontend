import React from 'react';
import './App.css';
import Header from './Header'
import MapContainer from './MapContainer'
import LocationContainer from './LocationContainer'
import Nav from './Nav'

export default class App extends React.Component {
  constructor(){
    super()
      this.state = {
        allLocations: []
      }
  }

componentDidMount(){
  fetch(`http://localhost:3001/locations`)
  .then(r => r.json())
  .then(locationsArray =>
    this.setState({
      allLocations: locationsArray
    })
  )
}

  render(){
    return(
      <div className="App">
      <Nav/>
        <Header/>
        <div className="ui two column grid col-height">
          <div className= "row">
            <div>
              <MapContainer
                allLocations={this.state.allLocations}
              />
            </div>
            <div>
              <LocationContainer
                allLocations={this.state.allLocations}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
