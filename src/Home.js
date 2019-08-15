import React from 'react'
import MapContainer from './MapContainer'
import LocationContainer from './LocationContainer'

export default class Home extends React.Component {
  render(){
    return(
      <div className="ui two column grid col-height">
        <div className= "row">
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
          <div className="row">
            <LocationContainer
              allLocations={this.props.allLocations}
              handleLocation={this.props.handleLocation}
            />
          </div>
        </div>
      </div>
    )
  }
}
