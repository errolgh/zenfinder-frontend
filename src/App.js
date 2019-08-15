import React from 'react';
import './App.css';
import Header from './Header'
import Location from './Location'
import LocationShow from './LocationShow'
import Nav from './Nav'
import Home from './Home'
import { Router, Route, Switch, Link } from 'react-router-dom'

export default class App extends React.Component {
  constructor(){
    super()
      this.state = {
        currentUser: null,
        allLocations: [],
        currentPopupObj: null,
        // currentZoom: [12],
        currentLocation: {
          latitude: 38.896138,
          longitude: -77.033255
        }
      }
  }

componentDidMount(){
  fetch(`http://localhost:3001/locations`)
  .then(r => r.json())
  .then(locationsArray =>  {
    console.log(locationsArray)
    this.setState({
      allLocations: locationsArray,
    })}
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
    currentLocation: location,
    currentPopupObj: location,
    })
  console.log("clicky")
}

  render(){
    return(
      <div className="App">
      <Nav
        allLocations={this.state.allLocations}
        handleHover={this.handleHover}
        handleUnhover={this.handleUnhover}
        currentPopupObj={this.state.currentPopupObj}
        handleLocation={this.handleLocation}
        currentLocation={this.state.currentLocation}
      />
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
              allLocations={this.state.allLocations}
              currentLocation={this.state.currentLocation}
              handleHover={this.handleHover}
              handleUnhover={this.handleUnhover}
              currentPopupObj={this.state.currentPopupObj}
              handleLocation={this.handleLocation}
            />
          }/>
          <Route path='/' render={()=>
            <div>
              <h1>404 :(</h1>
              <h2>Page Not Found</h2>
              <Link to='/home'>
                <button className="ui button red">
                  Home
                </button>
              </Link>
            </div>
          }/>
          </Switch>
      </div>
    )
  }
}
