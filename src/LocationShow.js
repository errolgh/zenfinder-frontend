import React from 'react'
import MapContainer from './MapContainer'
import Location from './Location'
import Review from "./Review"
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class LocationShow extends React.Component {

  state = {
    currentUser: null,
    currentLocation: null
  }

  componentDidMount(){
    fetch(`http://localhost:3001${this.props.location.pathname}`)
    .then(r => r.json())
    .then(locationObj => {
      console.log(locationObj)
      this.setState({
        currentLocation: locationObj
      })
    })
  }

  render(){
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
                />) : null}
              </div>
              <div>
                <div>
                <Link to='/reviews/new'
                  currentLocation={this.props.currentLocation}
                >
                  <button
                    className="ui button huge primary">
                    Review this Location
                  </button>
                </Link>
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
