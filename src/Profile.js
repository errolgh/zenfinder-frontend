import React from 'react'
import Review from './Review'

export default class Profile extends React.Component {

  state = {
    currentUser : null
  }

  componentDidMount(){
    let userId = localStorage.getItem('user')
    console.log(userId)
    fetch(`http://localhost:3001/users/${userId}`)
    .then(r => r.json())
    .then(userObj => {
      console.log("we are in componentDidMount")
      this.setState({
        currentUser: userObj
      })
    })
  }

  render(){
    return(
      <div className="ui grid">
        {this.state.currentUser ? (
          <div  className="ui row">
            <div>
              <div>
                <img className="ui medium centered circular image" src="http://www.nextfrontierinclusion.org/wp-content/uploads/job-manager-uploads/files/2017/12/user2-160x160.jpg"/>
              </div>
              <h3>
                {this.state.currentUser.user_name}
              </h3>
              <h2>
                {this.state.currentUser.bio}
              </h2>
            </div>
            <div>
              <div className="ui row">
                {this.state.currentUser.reviews.map(review => {
                  return <Review review={review}/>
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
