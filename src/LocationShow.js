import React from 'react'
import MapContainer from './MapContainer'

export default class LocationShow extends React.Component {
  render(){
    return(
      <div>
        <h2>
          {this.props.currentLocation.title}
        </h2>
        <div>
          <MapContainer
          allLocations={this.props.allLocations}
          handleHover={this.props.handleHover}
          handleUnhover={this.props.handleUnhover}
          currentPopupObj={this.props.currentPopupObj}
          handleLocation={this.props.handleLocation}
          currentLocation={this.props.currentLocation}
          />
        </div>
        <div>
          {"location's reviews go here"}
        </div>
      </div>
    )
  }
}
