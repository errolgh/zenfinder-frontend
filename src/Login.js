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
  console.log("submitting form:", event)
  fetch('http://localhost:3001/login', {
  	method: "POST",
  	headers: { 'Content-Type': 'application/json' },
  	body: JSON.stringify({
  		user_name: "paul",
  		password: "password"
    })
  })
    .then(res => res.json())
    .then(userHash => console.log(userHash))

}

  render(){
    return(
    <div>
      <form className="ui massive form"
            OnSubmit={()=>this.handleSubmit(window.event)}>
        <div className="two fields">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              placeholder="Username"
              onChange={()=> this.handleUserNameChange(window.event)}
            />
            </div>
            <div className="field">
              <label>Password</label>
              <input
               type="password"
               name="password"
               value={this.state.password}
               placeholder="Password"
               onChange={()=> this.handlePasswordChange(window.event)}
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


// fetch('http://localhost:3001/login', {
// 	method: "POST",
// 	headers: {
// 	'Content-Type': 'application/json'
//    },
// 	body: JSON.stringify({
// 		user_name: "",
// 		password: ""
//   })
// })
