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
        focus: true,
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

handleHover = (eventObj) => {
  console.log("we're hovering")
  this.state.focus ? this.setState({focus: null}) : this.setState({focus: eventObj})
}

handleLocation = () => {
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
                      showPopup={this.state.showPopup}
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
                        focus={this.state.focus}
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
