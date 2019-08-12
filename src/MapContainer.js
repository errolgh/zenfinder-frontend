import React from 'react'
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl'

const mapboxToken = 'pk.eyJ1IjoiZXJyb2xtYXBib3giLCJhIjoiY2p6NzFiYzdtMDJqZDNtcXhmeGJpOHB4OSJ9.Iduf-XCdcQjRwbggcLdCwA'
//instead of using the ReactMapboxGL component name, we've given it an alias and it already has a prop called 'accessToken' associated with it
const Map = ReactMapboxGl({
  accessToken: mapboxToken
})

// const MapContainer = ({ lat, long, sprite, locations }) => {
//deconstruction - so you don't need to use 'props.' explicitly
const MapContainer = (props) => {
  console.log(props.allLocations)
  return (
    <div className="location-container">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[-77.032610, 38.898310]}
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
                        onMouseEnter={()=>{props.handleHover()}}
                    />
                    
          }) : null
          }
        </Layer>
      </Map>
    </div>
  )
}

export default MapContainer

// <Popup
// coordinates={[-77.032610, 38.898310]}
// >
// <h1>Popup</h1>
// </Popup>
// <Feature coordinates={[-77.032610, 38.898310]}/>
