import React from 'react'
import MapContainer from './MapContainer'
import Location from './Location'
import Review from "./Review"
import { withRouter } from 'react-router'

class LocationShow extends React.Component {

  state = {
    currentUser: null,
    currentLocation: null
  }

  componentDidMount(){

    // let userId = localStorage.getItem('user')
    // console.log(userId)
    // fetch(`http://localhost:3001/users/${userId}`)
    // .then(r => r.json())
    // .then(userObj => {
    //   console.log("we are in componentDidMount")
    //   this.setState({
    //     currentUser: userObj
    //   })
    // })

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
      <h2>
        {this.props.currentLocation.title}
      </h2>
      <div className="ui two column grid col-height">
        <div>
        {this.state.currentLocation ? (
          <MapContainer
            handleHover={this.props.handleHover}
            handleUnhover={this.props.handleUnhover}
            currentPopupObj={this.props.currentPopupObj}
            handleLocation={this.props.handleLocation}
            currentLocation={this.state.currentLocation}
          />) : null}
        </div>
        <div>
        <div>
        <button className="ui button huge primary">Review this Location</button>
        </div>
        {this.state.currentLocation ? (

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
        ) : null
        }
        </div>
      </div>
      </div>
    )
  }
}
//give access to url
export default withRouter(LocationShow)
