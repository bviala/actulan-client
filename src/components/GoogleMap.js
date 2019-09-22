import React from 'react'
import './GoogleMap.scss'

const GOOGLE_MAP_API_KEY = 'AIzaSyBap_M_mBL76MdmgdouS9l3vBwMxEkXbcs'

const FRANCE_BOUNDS = {
  north: 52,
  south: 42,
  west: -5,
  east: 10
}

class GoogleMap extends React.Component {
  constructor (props) {
    super(props)
    this.googleMapRef = React.createRef()
  }

  componentDidMount () {
    const googleScript = document.createElement('script')
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
    window.document.body.appendChild(googleScript)

    googleScript.addEventListener('load', () => {
      this.googleMap = this.createGoogleMap()
    })
  }

  createGoogleMap () {
    // eslint-disable-next-line no-new
    const googleMap = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 6,
      center: {
        lat: 47.413135,
        lng: 2.856981
      },
      restriction: {
        latLngBounds: FRANCE_BOUNDS,
        strictBounds: false
      },
      disableDoubleClickZoom: true,
      scrollwheel: false,
      disableDefaultUI: true
    })
    return googleMap
  }

  render () {
    return (
      <div className="map-container" ref={this.googleMapRef}/>
    )
  }
}

export default GoogleMap
