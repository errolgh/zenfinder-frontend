import React from 'react';
import './App.css';
import Header from './Header'
import Location from './Location'
import LocationShow from './LocationShow'
import Nav from './Nav'
import Home from './Home'
import { Router, Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
  constructor(){
    super()
      this.state = {
        allLocations: [],
        currentPopupObj: null,
        currentLocation: {
          latitude: 38.896138,
          longitude: -77.033255
        }
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

handleLocation = (e, location) => {
  this.setState({
    currentLocation: location
  })
  console.log("clicky")
}

  render(){
    return(
      <div className="App">
      <Nav/>
        <Header/>
          <Switch>
            <Route path='/home' render={()=>
              <Home
                allLocations={this.state.allLocations}
                handleHover={this.handleHover}
                handleUnhover={this.handleUnhover}
                currentPopupObj={this.state.currentPopupObj}
                handleLocation={this.handleLocation}
                currentLocation={this.state.currentLocation}
              />
            }/>
          <Route path='/locations/:id' render={()=>
            <LocationShow
              currentLocation={this.state.currentLocation}
            />
          }/>
          </Switch>
      </div>
    )
  }
}
