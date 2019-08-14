import React from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render(){
    return(
      <div className="ui inverted large menu black">
  <Link to='/home' className="active item">
    Home
  </Link>
  <a className="item">
    Locations
  </a>
  <div className="right menu">
    <div className="item">
        <div className="ui primary button">Sign Up</div>
    </div>
  </div>
</div>
    )
  }
}
