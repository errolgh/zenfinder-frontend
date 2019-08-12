import React from 'react'
export default class Location extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="ui middle aligned divided list">
        <div className="ui card">
          <img className="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
          <div className="content">
            <a className="header">{this.props.location.title}</a>
          </div>
        </div>
      </div>
    )
  }
}
