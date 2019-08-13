import React from 'react';
import './App.css';
import Header from './Header'
import MapContainer from './MapContainer'
import LocationContainer from './LocationContainer'
import Nav from './Nav'
import { Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
  constructor(){
    super()
      this.state = {
        allLocations: [],
        currentPopupObj: null,
      }
  }

componentDidMount(){
  fetch(`http://localhost:3001/locations`)
  .then(r => r.json())
  .then(locationsArray =>
    this.setState({
      allLocations: locationsArray,
    })
  )
}

handleHover = (e, location) => {
  console.log(location)
  this.setState({
    currentPopupObj: location
  })
}

handleUnhover = () => {
  this.setState({
    currentPopupObj: null
  })
}

handleLocation = (e) => {
  console.log("clicky")
}

  render(){
    return(
      <div className="App">
      <Nav/>
        <Header/>
          <Switch>
            <Route path={`/`} render={()=> {
              return(
                <div className="ui two column grid col-height">
                  <div className= "row">
                    <div>
                      <MapContainer
                      allLocations={this.state.allLocations}
                      handleHover={this.handleHover}
                      handleUnhover={this.handleUnhover}
                      currentPopupObj={this.state.currentPopupObj}
                      />
                    </div>
                    <div>
                      <LocationContainer
                        allLocations={this.state.allLocations}
                        handleLocation={this.handleLocation}
                      />
                    </div>
                  </div>
                </div>
              )}
            }/>
            <Route path={`/locations`} render={()=> {
              return(
                <div className="ui two column grid col-height ">
                  <div className= "row">
                    <div>
                      <MapContainer
                        allLocations={this.state.allLocations}
                        handleHover={this.handleHover}
                        handleUnhover={this.handleUnhover}
                      />
                    </div>
                    <div>
                      <LocationContainer
                        allLocations={this.state.allLocations}
                        handleLocation={this.handleLocation}
                      />
                    </div>
                  </div>
                </div>
              )}
            }/>
          </Switch>
      </div>
    )
  }
}
