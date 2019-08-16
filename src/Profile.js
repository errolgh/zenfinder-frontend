import React from 'react'

export default class Profile extends React.Component {
  render(){
    return(
      <div className="ui grid">
        <div>
          <div>
            <img className="ui medium centered circular image" src="http://www.nextfrontierinclusion.org/wp-content/uploads/job-manager-uploads/files/2017/12/user2-160x160.jpg"/>
          </div>
          <h3>
            {"User"}
          </h3>
          <h2>
            {"I'm a user and what not. I like to do things with people at places."}
          </h2>
        </div>
        <div>
          <div>
            <h3>A bunch of reviews</h3>
            <h3>A bunch of reviews</h3>
            <h3>A bunch of reviews</h3>
            <h3>A bunch of reviews</h3>
          </div>
        </div>
      </div>
    )
  }
}
