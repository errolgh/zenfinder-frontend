import React from 'react'
import { Link } from 'react-router-dom'

export default class Location extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div
        className="ui middle aligned divided list"
        onClick={()=>{this.props.handleLocation()}}
      >
        <div className="ui card">
          <img className="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
          <div className="content">
            <Link to={`/locations/${this.props.location.id}`} className="header">{this.props.location.title}</Link>
          </div>
        </div>
      </div>
    )
  }
}
