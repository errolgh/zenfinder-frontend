import React from 'react'
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl'
import { withRouter } from 'react-router'

const mapboxToken = 'pk.eyJ1IjoiZXJyb2xtYXBib3giLCJhIjoiY2p6NzFiYzdtMDJqZDNtcXhmeGJpOHB4OSJ9.Iduf-XCdcQjRwbggcLdCwA'
const Map = ReactMapboxGl({
  accessToken: mapboxToken,
})

class MapContainer extends React.Component{
    render(){
      let lat
      let lng
      if (this.props.currentLocation === undefined && this.props.currentPopupObj !== null) {
        lat = this.props.currentPopupObj.latitude
        lng = this.props.currentPopupObj.longitude
      } else if (this.props.currentLocation !== undefined) {
        lat = this.props.currentLocation.latitude
        lng = this.props.currentLocation.longitude
      } else {
        lat = this.props.currentCenter.latitude
        lng = this.props.currentCenter.longitude

      }
    return (
      <div className="location-container">
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={[lng,lat]}
          zoom={[12]}
          pitch={[12]}
          containerStyle={{
            height: '600px',
            width: '1200px',
            margin: '0 auto'
          }}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ 'icon-image': 'star-15' }}>
            {this.props.match.path === "/locations/:id" ?
              (<Feature
                key={this.props.currentLocation.id}
                coordinates={[lng, lat]}
                onMouseLeave={()=>{this.props.handleUnhover()}}
                onMouseEnter={(e)=>{this.props.handleHover(e, this.props.currentLocation)}}/>)
                :
            this.props.allLocations !== undefined ? this.props.allLocations.map ((location) => {
              return   <Feature
                          key={location.id}
                          coordinates={[location.longitude, location.latitude]}
                          onMouseLeave={()=>{this.props.handleUnhover()}}
                          onMouseEnter={(e)=>{this.props.handleHover(e, location)}}/>
                       })  :null}
          </Layer>
          {this.props.currentPopupObj ?
          <Popup
            coordinates={[this.props.currentPopupObj.longitude, this.props.currentPopupObj.latitude]}
            offset={{
              'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
            }}>
            <h3>{this.props.currentPopupObj.title}</h3>
            <h5>{this.props.currentPopupObj.address}</h5>
            <div className="ui star rating" data-rating="3" data-max-rating="5">
              <h5> Rating: {this.props.currentPopupObj.average_rating.average_review}</h5>
            </div>
          </Popup> : null}
        </Map>
      </div>
    )
  }
}

export default withRouter(MapContainer)
