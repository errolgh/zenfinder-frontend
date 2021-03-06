import React from 'react'
import { Link } from 'react-router-dom'

export default class Review extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div class="ui centered card">
          <div class="image">
            <img src="http://www.nextfrontierinclusion.org/wp-content/uploads/job-manager-uploads/files/2017/12/user2-160x160.jpg"/>
          </div>
          <div class="content">
            <div class="header">{"Review Title"}</div>
              <div class="description">
                {this.props.review.description}
              </div>
              <div class="meta">
              <span class="date">"{this.props.review.user.user_name}"</span>
              </div>
          </div>
          <div className="content">
              <i className="star icon yellow"></i>
              {this.props.review.rating}
          </div>
          <div className="content">
            <Link to={`/home`}
                  className="header"
                  onClick={(e)=>{this.props.handleLocation(e, this.props.location)}}>
            <button className="ui button primary">
              Details
            </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
