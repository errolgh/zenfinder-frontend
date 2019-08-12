import React from 'react'
// import Map from './Map'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

const mapboxToken = 'pk.eyJ1IjoiZXJyb2xtYXBib3giLCJhIjoiY2p6NzFiYzdtMDJqZDNtcXhmeGJpOHB4OSJ9.Iduf-XCdcQjRwbggcLdCwA'
const Map = ReactMapboxGl({
  accessToken: mapboxToken
})

const MapContainer = ({ lat, long, sprite }) => {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      center={[-77.032610, 38.898310]}
      zoom={[12]}
      containerStyle={{
        height: '600px',
        width: '800px'
      }}
    >
      <Layer
        type="symbol"
        id="marker"
        layout={{ 'icon-image': 'marker-15' }}
      >
        <Feature coordinates={[-77.032610, 38.898310]}/>
      </Layer>
    </Map>
  )
}

export default MapContainer
