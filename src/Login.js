import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

export default class Login extends React.Component {
  constructor(){
    super()
      this.state = {
        userName: "",
        password: ""
      }
  }

handleUserNameChange = event => {
  this.setState({
    userName: event.target.value
  })
}

handlePasswordChange = event => {
  this.setState({
    password: event.target.value
  })
}

handleSubmit = event => {
  console.log("submitting form")
}

  render(){
     // onSubmit={()=>handleSubmit()}
    return(
      <div>
      <form className="ui massive form">
      <div className="two fields">
        <div className="field">
          <label>Username</label>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              placeholder="Username"
            /*onChange={()=> this.handleUserNameChange(event)}*/
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
             type="password"
             name="password"
             value={this.state.password}
             placeholder="Password"
           /*onChange={()=> this.handlePasswordChange(event)}*/
            />
          </div>
          </div>
          <Link to='/home' component={Home}>
            <button className="ui submit massive button teal">
              Submit
            </button>
          </Link>
        </form>
      </div>
    )
  }
}
