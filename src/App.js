import React from 'react';
import './App.css';
import Header from './Header'
import MapContainer from './MapContainer'

export default class App extends React.Component {
  constructor(){
    super()
      this.state = {

      }
  }

  render(){
    return(
      <div className="App">
        <Header/>
        <MapContainer/>
      </div>
    )
  }
}
