import React, { Fragment } from 'react'
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl'
import { withRouter } from 'react-router'

const mapboxToken = 'pk.eyJ1IjoiZXJyb2xtYXBib3giLCJhIjoiY2p6NzFiYzdtMDJqZDNtcXhmeGJpOHB4OSJ9.Iduf-XCdcQjRwbggcLdCwA'

const Map = ReactMapboxGl({
  accessToken: mapboxToken,
  doubleClickZoom: false
})

class LocationForm extends React.Component {

  state = {
    currentCoordinates: {
      latitude: null,
      longitude: null
    },
    currentZoom: [],
    currentTitle: "",
    currentDescription: "",
    currentAddress: ""
  }

  handleLocationSubmit = (event) => {
    console.log("submitting location")
    event.preventDefault()
    fetch(`http://localhost:3001/locations`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: this.state.currentTitle,
        description: this.state.currentDescription,
        address: this.state.currentAddress,
        latitude: this.state.currentCoordinates.latitude,
        longitude: this.state.currentCoordinates.longitude
      })
    })
    .then(r => r.json())
    .then(locationObj =>{
      this.props.addLocation(locationObj)
      this.props.history.push(`/locations/${locationObj.id}`)}
    )
  }

  handleTitleChange = (event) => {
    this.setState({
      currentTitle: event.target.value
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      currentDescription: event.target.value
    })
  }

  handleAddressChange = (event) => {
    this.setState({
      currentAddress: event.target.value
    })
  }

  handleDoubleClick = (map, event) => {
    let latitude = event.lngLat.lat
    let longitude = event.lngLat.lng
    this.setState({
      currentCoordinates: {
        latitude: latitude,
        longitude: longitude
      }
    })
  }


  addFeature = () => {
    return <Feature
      coordinates={[this.state.currentCoordinates.longitude, this.state.currentCoordinates.latitude]}/>
  }

  addPopup = () => {
    return <Popup
            coordinates={[this.state.currentCoordinates.longitude, this.state.currentCoordinates.latitude]}
            offset={{
      'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
    }}>
    <h3>New Location!</h3>
    </Popup>
  }

  render(){
    let lat
    let lng
    if (this.state.currentCoordinates.longitude){
      lng = this.state.currentCoordinates.longitude
      lat = this.state.currentCoordinates.latitude
      }else{
        lng = this.props.currentCenter.longitude
        lat = this.props.currentCenter.latitude
      }
    return(
      <div>
        <div classname="ui two column grid col-height">
          <h2 classname="header">Add a Location</h2>
          <h4>(Double-click anywhere on the map to add a Location)</h4>
          <div className="row">
          <Map
            onDblClick={this.handleDoubleClick}
            style="mapbox://styles/mapbox/streets-v9"
            center={[lng, lat]}
            zoom={[12]}
            pitch={[12]}
            containerStyle={{
              height: '600px',
              width: '800px',
              margin: '0 auto'
            }}
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ 'icon-image': 'star-15' }}>
            {this.addFeature()}
            </Layer>
            {this.addPopup()}
            </Map>
          </div>
        </div>
        <div>
        <form
          className="ui form"
          onSubmit={this.handleLocationSubmit}>
          <div className="ui field four wide column">
            <h3 className="header">Title</h3>
            <input
              type="text"
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="ui field four wide column">
            <h3 className="header">Description</h3>
            <textarea
              onChange={this.handleDescriptionChange}>
            </textarea>
          </div>
          <div className="ui field four wide column">
            <h3 className="header">Address</h3>
            <input
             type="text"
             onChange={this.handleAddressChange}
            />
          </div>
          <button className="ui large button primary" type="submit">
            Submit
          </button>
        </form>
        </div>
      </div>
    )
  }
}

export default withRouter(LocationForm)
