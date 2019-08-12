import React from 'react';
import './App.css';
import Header from './Header'
import MapContainer from './MapContainer'
import LocationContainer from './LocationContainer'
import Nav from './Nav'

export default class App extends React.Component {
  constructor(){
    super()
      this.state = {
        locationArray: []
      }
  }

componentDidMount(){
  // fetch(`localhost:3001/locations`)
  // .then(r => r.json())
  // .then()
  // this.setState({
  //   locationArray: []
  // })
}

  render(){
    return(
      <div className="App">
      <Nav/>
        <Header/>
        <div className="ui two column grid col-height">
          <div className= "row">
            <div><MapContainer/></div>
            <div><LocationContainer/></div>
          </div>
        </div>
      </div>
    )
  }
}
