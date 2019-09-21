import React from 'react'
import './GoogleMap.scss'

const GOOGLE_MAP_API_KEY = 'AIzaSyBap_M_mBL76MdmgdouS9l3vBwMxEkXbcs'

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
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 16,
      center: {
        lat: 43.642567,
        lng: -79.387054
      },
      disableDefaultUI: true
    })
  }

  render () {
    return (
      <div className="map-container" ref={this.googleMapRef}/>
    )
  }
}

export default GoogleMap
