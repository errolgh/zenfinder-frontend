import React from 'react'
export default class Nav extends React.Component {
  render(){
    return(
      <div class="ui inverted large menu black">
  <a class="active item">
    Home
  </a>
  <a class="item">
    Messages
  </a>
  <div class="right menu">
    <div class="item">
        <div class="ui primary button">Sign Up</div>
    </div>
  </div>
</div>
    )
  }
}
