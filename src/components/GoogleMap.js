import React from 'react'
import './GoogleMap.scss'
import BLUE_MARKER from '../blue-marker.png'
import { GOOGLE_MAP_API_KEY } from '../apiKeys'

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

  createGoogleMap () {
    // eslint-disable-next-line no-new
    const googleMap = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 6,
      center: {
        lat: 47.413135,
        lng: 2.856981
      },
      gestureHandling: 'none',
      disableDefaultUI: true,
      draggableCursor: 'default'
    })
    return googleMap
  }

  addMarkers () {
    const eventMarkers = []
    this.props.events.forEach(event => {
      if (event.location && event.location.lat && event.location.lng) {
        const latLng = new window.google.maps.LatLng(event.location.lat, event.location.lng)
        const marker = new window.google.maps.Marker({
          position: latLng,
          map: this.googleMap
        })
        const eventMarker = {
          eventId: event.id,
          marker: marker
        }
        marker.addListener('click', () => {
          console.log('marker click')
        })
        marker.addListener('mouseover', () => {
          this.onMarkerMouseOver(eventMarker)
        })
        marker.addListener('mouseout', () => {
          this.onMarkerMouseOut(eventMarker)
        })
        eventMarkers.push(eventMarker)
      }
    })
    this.setState({
      eventMarkers
    })
  }

  onMarkerMouseOver (eventMarker) {
    eventMarker.marker.setIcon(highlightedIcon)
    this.props.onHoverChange(eventMarker.eventId)
  }

  onMarkerMouseOut (eventMarker) {
    eventMarker.marker.setIcon(null)
    this.props.onHoverChange(null)
  }
}

export default GoogleMap
