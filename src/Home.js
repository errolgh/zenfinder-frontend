import React from 'react'
import MapContainer from './MapContainer'
import LocationContainer from './LocationContainer'

export default class Home extends React.Component {
  render(){
    return(
      <div className="">
        <div className= "">
          <div>
            <MapContainer
            allLocations={this.props.allLocations}
            handleHover={this.props.handleHover}
            handleUnhover={this.props.handleUnhover}
            currentPopupObj={this.props.currentPopupObj}
            handleLocation={this.props.handleLocation}
            currentLocation={this.props.currentLocation}
            currentCenter={this.props.currentCenter}
            />
          </div>
          <div>
            <LocationContainer
              allLocations={this.props.allLocations}
              currentCenter={this.props.currentCenter}
              handleLocation={this.props.handleLocation}
              selectAlocation={this.props.selectAlocation}
              showLocation={this.props.showLocation}
              currentReview={this.props.currentReview}
              setCurrentReview={this.props.setCurrentReview}
            />
          </div>
        </div>
      </div>
    )
  }
}
