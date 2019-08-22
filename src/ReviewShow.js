import React from 'react'
import { Link } from 'react-router-dom'

export default class ReviewShow extends React.Component {

  state = {
    currentReview: null
  }

  componentDidMount(){
    console.log(this.props)
    let id = this.props.history.location.pathname.split("/")[2]
    fetch(`http://localhost:3001/reviews/${id}`)
    .then(r => r.json())
    .then(reviewObj =>  {

      console.log(reviewObj)
      this.setState({
        currentReview: reviewObj,
      })}
    )
  }

  render(){
    console.log("currentrevewi:", this.state.currentReview)
    return(
      <div>
        <div>
          <img className="ui small centered circular image" src="http://www.nextfrontierinclusion.org/wp-content/uploads/job-manager-uploads/files/2017/12/user2-160x160.jpg"/>
        </div>
        {this.state.currentReview ? (
          <div>
            <h3>
              {this.state.currentReview.user.user_name}
            </h3>
            <h2>
              {this.state.currentReview.title}
            </h2>
            <div>
              "{this.state.currentReview.description}"
            </div>
            {this.state.currentReview ? (
            <Link to={`/locations/${this.state.currentReview.location.id}`}
              currentLocation={this.state.currentReview.location}
            >
              <button className='ui huge primary button'>
                Back
              </button>
            </Link>): null}
          </div>
        ) : null}
      </div>
    )
  }
}
