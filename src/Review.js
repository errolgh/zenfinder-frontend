import React from 'react'
import { Link } from 'react-router-dom'

export default class Review extends React.Component {

  state = {
    currentReview: null
  }

  componentDidMount(){
    fetch(`http://localhost:3001/reviews/${this.props.review.id}`)
    .then(r => r.json())
    .then(reviewObj =>
      this.setState({
        currentReview: reviewObj
      })
    )
  }

  render(){
    return(
      <React.Fragment>
        {this.state.currentReview ? (
          <div class="ui centered card">
            <div class="image">
              <img src="http://www.nextfrontierinclusion.org/wp-content/uploads/job-manager-uploads/files/2017/12/user2-160x160.jpg"/>
            </div>
            <div class="content">
              <div class="header">{this.props.review.title}</div>
                <div class="description">
                  {this.props.review.description}
                </div>
                <div class="meta">
                <span class="date">"{this.props.review.user_name}"</span>
                </div>
            </div>
            <div className="content">
                <i className="star icon yellow"></i>
                {this.props.review.rating}
            </div>
            <div className="content">
              <Link to={`/reviews/${this.state.currentReview.id}`}
                    className="header">
              <button className="ui button primary">
                Details
              </button>
              </Link>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    )
  }
}
