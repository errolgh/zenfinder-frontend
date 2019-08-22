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
import LocationForm from './LocationForm'
import { withRouter } from 'react-router'

class App extends React.Component {
  constructor(){
    super()
      this.state = {
        currentUser: null,
        currentZoom: [12],
        allLocations: [],
        locationObj: null,
        currentPopupObj: null,
        currentCenter: {
          latitude: 38.896138,
          longitude: -77.033255
        },
        selectedLocation: {},
        showLocation: {},
        currentReview: {}
      }
  }

componentDidMount(){
  fetch(`http://localhost:3001/locations`)
  .then(r => r.json())
  .then(locationsArray =>  {
    this.setState({
      allLocations: locationsArray,
    })}
  )
}

  addLocation = (locationObj) => {
    this.setState({
      allLocations: [...this.state.allLocations, locationObj],
      locationObj: locationObj
    })
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
    showLocation: location,
    currentPopupObj: location,
    })
  console.log("clicky")
}

setCurrentReview = (reviewObj) =>{
  this.setState({
    currentReview:reviewObj
  })
}


  selectAlocation = () => {
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
                user={this.state.currentUser}
                currentZoom={this.state.currentZoom}
                selectAlocation={this.selectAlocation}
                showLocation={this.state.showLocation}
                currentReview={this.state.currentReview}
                setCurrentReview={this.setCurrentReview}

              />
            }/>
            <Route
              path='/locations/new' render={()=>
                <LocationForm
                currentCenter={this.state.currentCenter}
                addLocation={this.addLocation}
              />}
            />
            <Route path='/locations/:id' render={()=>
              <LocationShow
                allLocations={this.state.allLocations}
                currentCenter={this.state.currentCenter}
                handleHover={this.handleHover}
                handleUnhover={this.handleUnhover}
                currentPopupObj={this.state.currentPopupObj}
                handleLocation={this.handleLocation}
                user={this.state.currentUser}
                locationObj={this.state.locationObj}
                selectALocation={this.selectALocation}
                currentLocation={this.state.showLocation}
                setCurrentReview={this.setCurrentReview}
                showLocation={this.state.showLocation}

              />
            }/>
              <Route path='/reviews/new' render={() =>
                <ReviewForm
                  user={this.state.currentUser}
                  history={this.props.history}
                  setCurrentReview={this.setCurrentReview}
                  showLocation={this.state.showLocation}
                  currentReview={this.state.currentReview}
                />
              }/>
              <Route path='/reviews/:id'
                    render={(props)=>
                      <ReviewShow
                      history={this.props.history}
                      currentReview={this.state.currentReview}
                        setCurrentReview={this.setCurrentReview}/>}/>

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
