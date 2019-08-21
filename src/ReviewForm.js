import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class ReviewForm extends React.Component {

  state = {
    currentLocation: null,
    currentUser: null,
    currentTitle: "",
    currentDescription: "",
    currentRating: ""
  }

  componentDidMount(){
    console.log("ReviewForm#componentDidMount")
    let userId = localStorage.getItem('user')
    console.log(userId)
    fetch(`http://localhost:3001/users/${userId}`)
    .then(r => r.json())
    .then(userObj => {
      this.setState({
        currentUser: userObj,
        currentLocation: this.props.currentLocation
      })
    })
  }

  handleReviewSubmit = (event) => {
    event.preventDefault()
    console.log("attempting to submit review...")
    fetch(`http://localhost:3001/reviews`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: this.state.currentTitle,
        description: this.state.currentDescription,
        rating: this.state.currentRating,
        user_id: this.state.currentUser.id,
        location_id: this.state.currentLocation.id
      })
    })
    .then(r => r.json())
    .then(reviewObj =>
      this.props.history.push(`/reviews/${reviewObj.id}`)
    )
  }

  handleTitleChange = (event) => {
    this.setState({
      currentTitle: event.target.value
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      currentDescription: event.target.value
    })
  }

  handleRatingChange = (event) => {
    this.setState({
      currentRating: event.target.value
    })
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <div>
          <img className="ui small centered circular image" src="http://www.nextfrontierinclusion.org/wp-content/uploads/job-manager-uploads/files/2017/12/user2-160x160.jpg"/>
        </div>

        {this.state.currentUser ?
        <h2>
          {`${this.state.currentUser.user_name}'s Zen Experience`}
        </h2>
        : null}

        <form
          className="ui form"
          onSubmit={this.handleReviewSubmit}>
          <div className="eight wide field">
            <label>Give your adventure a title</label>
            <input
              type="text"
              onChange={this.handleTitleChange}
            />
          </div>


          <div className="eight wide field">
            <label>Describe your experience</label>
            <textarea
              rows="2"
              onChange={this.handleDescriptionChange}
              >
              </textarea>
          </div>

          <select
            class="ui fluid dropdown four wide field"
            onChange={this.handleRatingChange}
          >
            <option value="">Rate your Experience</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <button className='ui button huge primary teal'>
            Submit your experience
          </button>
        </form>
      </div>
    )
  }
}
