import React from 'react'
import Login from './Login'
import Profile from './Profile'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render(){
    return(
      <div className="ui inverted large menu black">
        <Link to='/home' className="active item">
          Home
        </Link>
        <div className="right menu">
          <div className="item">
            <Link to='/login' component={Login}>
              <div
                className="ui primary button">
                  Login
              </div>
            </Link>
          </div>
          <div className="item">
            <Link to='/profile' component={Profile}>
              <div
                className="ui primary button">
                  Profile
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
