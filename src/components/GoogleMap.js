import React from 'react'
import './GoogleMap.scss'
import BLUE_MARKER from '../blue-marker.png'

const GOOGLE_MAP_API_KEY = 'AIzaSyBap_M_mBL76MdmgdouS9l3vBwMxEkXbcs'

const FRANCE_BOUNDS = {
  north: 52,
  south: 42,
  west: -5,
  east: 10
}

const highlightedIcon = {
  url: BLUE_MARKER,
  scaledSize: {
    width: 27,
    height: 43
  }
}

class GoogleMap extends React.Component {
  constructor (props) {
    super(props)
    this.googleMapRef = React.createRef()
    this.state = {
      eventMarkers: []
    }
  }

  componentDidMount () {
    const googleScript = document.createElement('script')
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
    window.document.body.appendChild(googleScript)

    googleScript.addEventListener('load', () => {
      this.googleMap = this.createGoogleMap()
      this.addMarkers()
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

  addMarkers () {
    console.log(`Adding ${this.props.events.length} events to the map`)
    const eventMarkers = []
    this.props.events.forEach(event => {
      if (event.location && event.location.lat && event.location.lng) {
        const latLng = new window.google.maps.LatLng(event.location.lat, event.location.lng)
        const marker = new window.google.maps.Marker({
          position: latLng,
          map: this.googleMap
        })
        eventMarkers.push({
          eventId: event.id,
          marker: marker
        })
      }
    })
    this.setState({
      eventMarkers
    })
  }

  componentDidUpdate (prevProps) {
    // if map is not ready, markers will be added in its load callback
    if (window.google && prevProps.events !== this.props.events) {
      this.addMarkers()
    }
    if (prevProps.hoveredEvent !== this.props.hoveredEvent) {
      this.state.eventMarkers.forEach(eventMarker => {
        if (eventMarker.eventId === this.props.hoveredEvent) {
          eventMarker.marker.setIcon(highlightedIcon)
        } else {
          eventMarker.marker.setIcon(null)
        }
      })
    }
  }

  render () {
    return (
      <div className="map-container" ref={this.googleMapRef}/>
    )
  }
}

export default GoogleMap
