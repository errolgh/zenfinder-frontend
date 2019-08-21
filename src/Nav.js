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
        {localStorage.getItem('user')? (
          <div className="item">
          <Link to='/locations/new'>
          <div><i className="plus icon"></i>Location</div>
          </Link>
          </div>
        ) : null}
        <div className="right menu">
          {localStorage.getItem('user') ? (
            <div className="item">
              <Link
                to='/home'
                onClick={this.props.clearUserData}
              >
                <div
                  className="ui primary button">
                    Logout
                </div>
              </Link>
            </div> ) : (
            <div className="item">
              <Link to='/login'>
                <div
                  className="ui primary button">
                    Login
                </div>
              </Link>
            </div>
          )
          }
          </div>
          {localStorage.getItem('user')? (
            <div className="item">
            <Link to='/profile'>
            <div
              className="ui primary">
              <i className="user large blue circle icon"></i>
            </div>
            </Link>
            </div>
          ) : null}
        </div>
      // </div>
    )
  }
}
