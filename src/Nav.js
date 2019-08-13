import React from 'react'
export default class Nav extends React.Component {
  render(){
    return(
      <div className="ui inverted large menu black">
  <a className="active item">
    Home
  </a>
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
