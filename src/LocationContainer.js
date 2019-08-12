import React from 'react'
import Location from './Location'
import './App.css';

export default class LocationContainer extends React.Component {
  constructor(props){
    super(props)
  }
    render(){
      return(
        <div>
          {
            this.props.allLocations.map(location => {
              return <Location location={location}/>
            })
          }
        </div>
      )
    }
}
