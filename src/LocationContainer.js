import React from 'react'
import Location from './Location'
import './App.css';

export default class LocationContainer extends React.Component {
  constructor(props){
    super(props)
  }
    render(){
      return(
        <div className= "location-container">
          {
            this.props.allLocations.map(location => {
              return <Location
                        location={location}
                        handleLocation={this.props.handleLocation}
                    />
            })
          }
        </div>
      )
    }
}
