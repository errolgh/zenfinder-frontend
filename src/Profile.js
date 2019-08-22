import React from 'react'
import Review from './Review'
import ProfileReview from './ProfileReview'

export default class Profile extends React.Component {

  state = {
    currentUser : null
  }

  componentDidMount(){
    let userId = localStorage.getItem('user')
    fetch(`http://localhost:3001/users/${userId}`)
    .then(r => r.json())
    .then(userObj => {
      this.setState({
        currentUser: userObj
      })
    })
  }

  render(){
    return(
      <div className="">
        {this.state.currentUser ? (
          <div  className="">
            <div>
              <div>
                <img className="ui medium centered circular image" src="http://www.nextfrontierinclusion.org/wp-content/uploads/job-manager-uploads/files/2017/12/user2-160x160.jpg"/>
              </div>
              <h3>
                {this.state.currentUser.user_name}
              </h3>
              <h2>
                "{this.state.currentUser.bio}"
              </h2>
              <h2>
              <h3 className="header ">Your Activities:</h3>
                {this.state.currentUser.activities.map(activity => {
                  return <div
                  className="ui card centered inverted green"> {activity.title}</div>
                })}
              </h2>
            </div>
            <div>
              <div className="ui four column grid">
                {this.state.currentUser.reviews.map(review => {
                  return <ProfileReview
                            review={review}
                          />
                }
                )}
            </div>
          </div>
          </div>
        )
        : null}

      </div>
    )
  }
}
