import React from 'react'
import { Link } from 'react-router-dom'


export default class ProfileReview extends React.Component {
  //
  // state = {
  //   currentReview: null
  // }
  //
  // componentDidMount(){
  //   fetch(`http://localhost:3001/reviews/${this.props.review.id}`)
  //   .then(r => r.json())
  //   .then(reviewObj =>{
  //   this.setState({
  //     currentReview: reviewObj
  //   })})
  // }

  render(){
    // console.log("fetch:",this.state.currentReview)
    console.log(" review props: ",this.props.review)
    console.log(" user props: ",this.props.userObj)
    return(
      <div>
      {this.props.review ? (
          <div class="ui centered card">

            <div class="content">
              <div class="header">{this.props.review.title}</div>
                <div class="description">
                  "{this.props.review.description}"
                </div>
                <div class="meta">
                <span class="date"> - {this.props.review.user.user_name}</span>
                </div>
            </div>
            <div className="content">
                <i className="star icon yellow"></i>
                {this.props.review.rating.toFixed(1)}
            </div>
            <div className="content">
              <Link to={`/reviews/${this.props.review.id}`}
                    className="header">
              <button className="ui button primary">
                Details
              </button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
