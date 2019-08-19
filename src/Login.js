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
  event.preventDefault()
  console.log("submitting form:", event)
  fetch('http://localhost:3001/login', {
  	method: "POST",
  	headers: { 'Content-Type': 'application/json' },
  	body: JSON.stringify({
  		user_name: this.state.userName,
  		password: this.state.password
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.authenticated) {
        this.props.passUserData(data)
      } else {
        alert("incorrect username or password")
      }
    })

}

  render(){
    return(
    <div>
      <form className="ui massive form"
            onSubmit={this.handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              placeholder="Username"
              onChange={this.handleUserNameChange}
            />
            </div>
            <div className="field">
              <label>Password</label>
              <input
               type="password"
               name="password"
               value={this.state.password}
               placeholder="Password"
               onChange={this.handlePasswordChange}
              />
              </div>
            </div>

              <button type="submit" className="ui submit massive button teal">
                Submit
              </button>

      </form>
    </div>
    )
  }
}
