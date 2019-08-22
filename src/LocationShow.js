import React from 'react'
import MapContainer from './MapContainer'
import Location from './Location'
import Review from "./Review"
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

// const latitude = locationObj.latitude || this.props.currentCenter.latitude
// const longitude = locationObj.longitude || this.props.currentCenter.longitude
class LocationShow extends React.Component {


  state = {
    currentUser: null,
    currentLocation: null,
    currentCenter: {
      latitude:null,
      longitude: null
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3001/${this.props.location.pathname}`)
    .then(r => r.json())
    .then(locationObj => {
      console.log("locationObj:",locationObj)
      this.setState({
        currentLocation: locationObj,
        currentcenter: {
          latitude: locationObj.latitude,
          longitude: locationObj.longitude
        }

      })
    })
  }

  setCurrentLocation = (locationObj) => {
    this.setState({
      currentLocation: locationObj
    })
  }

  render(){
    console.log("history:", this.props.history.location.pathname.split("/")[2])
    return(
      <div>
        {this.state.currentLocation ? (
          <div>
            <h2>
              {this.state.currentLocation.title}  ( {this.state.currentLocation.average_rating.average_review}<i className="star icon yellow"></i><span>)</span>
            </h2>
            <div className="ui two column grid col-height">
              <div>
              {this.state.currentLocation ? (
                <MapContainer
                  handleHover={this.props.handleHover}
                  currentCenter={this.props.currentCenter}
                  handleUnhover={this.props.handleUnhover}
                  currentPopupObj={this.props.currentPopupObj}
                  handleLocation={this.props.handleLocation}
                  currentLocation={this.state.currentLocation}
                  setCurrentReview={this.props.setCurrentReview}

                />) : null}
              </div>
              <div>
              {this.state.currentLocation ? (

                <div>
                <Link to='/reviews/new'
                currentLocationId={this.props.history.location.pathname.split("/")[2]}
                currentLocation={this.props.currentLocation}
                >
                <button
                className="ui button huge primary">
                Review this Location
                </button>
                </Link>
                </div>
              ) : null}
                <div>
                <h2>Reviews</h2>
              </div>
              {this.state.currentLocation ? (




                this.state.currentLocation.reviews.length < 1 ? (
                   (<h3>Be the first to review this location!</h3>

                ) : null) :




                  this.state.currentLocation.reviews.map((review) => {
                    return <Review
                      currentLocation={this.state.currentLocation}
                      handleHover={this.props.handleHover}
                      handleUnhover={this.props.handleUnhover}
                      currentPopupObj={this.props.currentPopupObj}
                      handleLocation={this.props.handleLocation}
                      review={review}
                      setCurrentLocation={this.setCurrentLocation}
                      currentReview={this.props.currentReview}
                      setCurrentReview={this.props.setCurrentReview}
                    />
                  })
                ) : null}
              </div>
            </div>
          </div>) : null}
      </div>
    )
  }
}
//give access to url
export default withRouter(LocationShow)
