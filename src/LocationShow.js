import React from 'react'
import MapContainer from './MapContainer'
import Location from './Location'
import Review from "./Review"

export default class LocationShow extends React.Component {
  render(){
    return(
      <div>
      <h2>
        {this.props.currentLocation.title}
      </h2>
      <div className="ui two column grid col-height">
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
          {
            this.props.currentLocation.reviews.map((review) => {
              return <Review
                      currentLocation={this.props.currentLocation}
                      allLocations={this.props.allLocations}
                      handleHover={this.props.handleHover}
                      handleUnhover={this.props.handleUnhover}
                      currentPopupObj={this.props.currentPopupObj}
                      handleLocation={this.props.handleLocation}
                      review={review}
                    />
            })
          }
        </div>
      </div>
      </div>
    )
  }
}
