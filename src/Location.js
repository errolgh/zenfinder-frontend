import React from 'react'
import { Link } from 'react-router-dom'

export default class Location extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log("props:", this.props.location)
    return(
      <React.Fragment>
        <div class="ui centered card">
          <div class="image">
            <img src="https://cdn8.dissolve.com/p/D246_34_222/D246_34_222_1200.jpg"/>
          </div>
          <div class="content">
            <div class="header">{this.props.location.title}</div>
              <div class="description">
                {this.props.location.address}
              </div>
              <div class="meta">
              <span class="date">"{this.props.location.description}"</span>
              </div>
          </div>
          <div className="content">
              <i className="star icon yellow"></i>
              {this.props.location.average_rating.average_review}
          </div>
          <div className="content">
            <Link to={`locations/${this.props.location.id}`}
                  className="header"
                  currentLocation={this.props.showLocation}
                  currentReview={this.props.currentReview}
                  showLocation={this.props.showLocation}
                  onClick={(e)=>{this.props.handleLocation(e, this.props.location)}}>
            <button
              className="ui button primary"
              setCurrentReview={this.props.setCurrentReview}
              showLocation={this.props.showLocation}>
              Details
            </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
