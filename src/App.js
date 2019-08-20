import React from 'react';
import './App.css';
import Header from './Header'
import Location from './Location'
import LocationShow from './LocationShow'
import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import ReviewForm from './ReviewForm'
import { Route, Switch, Link, Redirect} from 'react-router-dom'
import ReviewShow from './ReviewShow'
import { withRouter } from 'react-router'

class App extends React.Component {
  constructor(){
    super()
      this.state = {
        currentUser: null,
        allLocations: [],
        currentPopupObj: null,
        // currentLocation: null,
        currentCenter: {
          latitude: 38.896138,
          longitude: -77.033255
        }
      }
  }

componentDidMount(){
  fetch(`http://localhost:3001/locations`)
  .then(r => r.json())
  .then(locationsArray =>  {
    // console.log(locationsArray)
    this.setState({
      allLocations: locationsArray,
    })}
  )
}

passUserData = (currentUser) => {
  console.log("we are in passUserData: ", currentUser)
  this.setState({
    currentUser
  })
  localStorage.setItem(
    "user", currentUser.user.id
  )
  this.props.history.push('/profile')
}

clearUserData = () => {
  this.setState({
    currentUser: null
  })
  localStorage.clear()
}

handleHover = (e, location) => {
  // console.log(location)
  this.setState({
    currentPopupObj: location
  })
}

handleUnhover = () => {
  this.setState({
    currentPopupObj: null
  })
}

handleLocation = (e, location) => {
  this.setState({
    currentLocation: location,
    currentPopupObj: location,
    })
  console.log("clicky")
}

  render(){
    return(
      <div className="App">
        <Nav
          allLocations={this.state.allLocations}
          handleHover={this.handleHover}
          handleUnhover={this.handleUnhover}
          currentPopupObj={this.state.currentPopupObj}
          handleLocation={this.handleLocation}
          currentLocation={this.state.currentLocation}
          clearUserData={this.clearUserData}
          user={this.state.currentUser}
        />
        <Header/>
          <Switch>
            <Route path='/home' render={()=>
              <Home
                allLocations={this.state.allLocations}
                handleHover={this.handleHover}
                handleUnhover={this.handleUnhover}
                currentPopupObj={this.state.currentPopupObj}
                handleLocation={this.handleLocation}
                currentCenter={this.state.currentCenter}
                currentLocation={this.state.currentLocation}
                user={this.state.currentUser}

              />
            }/>
            <Route path='/locations/:id' render={()=>
              <LocationShow
                allLocations={this.state.allLocations}
                currentLocation={this.state.currentLocation}
                currentCenter={this.state.currentCenter}
                handleHover={this.handleHover}
                handleUnhover={this.handleUnhover}
                currentPopupObj={this.state.currentPopupObj}
                handleLocation={this.handleLocation}
                user={this.state.currentUser}
              />
            }/>
              <Route path='/reviews/new' render={() =>
                <ReviewForm
                  currentLocation={this.state.currentLocation}
                  user={this.state.currentUser}
                  history={this.props.history}
                />
              }/>
              <Route path='/reviews/:id'component={ReviewShow}/>
              <Route path="/login" render={()=>
                localStorage.getItem('user') ? <Redirect to='/profile' /> :
                <Login
                  passUserData={this.passUserData}
                />
              }/>
              <Route path='/profile'
                     render={()=>
                      localStorage.getItem('user') ?
                      (<Profile
                        user={this.state.currentUser}
                      />) :
                      (<Redirect to='/login'/>
                    )}
                user={this.state.currentUser}
              />
              <Route path='/' render={()=>
                <div>
                  <h1>404 :(</h1>
                  <h2>Page Not Found</h2>
                  <Link to='/home'>
                    <button className="ui button red">
                      Home
                    </button>
                  </Link>
                </div>
              }/>
          </Switch>
      </div>
    )
  }
}

export default withRouter(App)
