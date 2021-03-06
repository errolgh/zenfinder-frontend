import React from 'react'
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl'

const mapboxToken = 'pk.eyJ1IjoiZXJyb2xtYXBib3giLCJhIjoiY2p6NzFiYzdtMDJqZDNtcXhmeGJpOHB4OSJ9.Iduf-XCdcQjRwbggcLdCwA'
//instead of using the ReactMapboxGL component name, we've given it an alias and it already has a prop called 'accessToken' associated with it
const Map = ReactMapboxGl({
  accessToken: mapboxToken,
})

// const MapContainer = ({ lat, long, sprite, locations }) => {
//deconstruction - so you don't need to use 'props.' explicitly
const MapContainer = (props) => {
  console.log(props.allLocations)
  return (
    <div className="location-container">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[props.currentLocation.longitude, props.currentLocation.latitude]}
        zoom={[12]}
        pitch={[8]}
        containerStyle={{
          height: '600px',
          width: '800px'
        }}
      >
        <Layer
          type="symbol"
          id="marker"
          layout={{ 'icon-image': 'star-15' }}>

          {props.allLocations !== undefined ? props.allLocations.map ((location) => {
            return   <Feature
                        key={location.id}
                        coordinates={[location.longitude, location.latitude]}
                        onMouseLeave={()=>{props.handleUnhover()}}
                        onMouseEnter={(e)=>{props.handleHover(e, location)}}/>
                     }) : null}
        </Layer>
        {props.currentPopupObj ?
        <Popup
          coordinates={[props.currentPopupObj.longitude, props.currentPopupObj.latitude]}
          offset={{
            'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
          }}>
          <h3>{props.currentPopupObj.title}</h3>
          <h5>{props.currentPopupObj.address}</h5>
          <div className="ui star rating" data-rating="3" data-max-rating="5">
            <h5> Rating: {props.currentPopupObj.rating}</h5>
          </div>
        </Popup> : null}
      </Map>
    </div>
  )
}

export default MapContainer
// coordinates={[props.currentPopupObj.longitude, props.currentPopupObj.latitude]}
// offset={{
//   'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
// }}
// key={props.currentPopupObj.id}
// className="popup">
// <h3>{props.currentPopupObj.title}</h3>

// <Popup
// coordinates={[-77.032610, 38.898310]}
// >
// <h1>Popup</h1>
// </Popup>
// <Feature coordinates={[-77.032610, 38.898310]}/>
