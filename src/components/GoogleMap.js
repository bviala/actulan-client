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
  }

  componentDidMount () {
    if (window.google && window.google.maps) {
      this.setGoogleMap()
      this.setMarkers()
    } else {
      const googleScript = document.createElement('script')
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`
      window.document.body.appendChild(googleScript)

      googleScript.addEventListener('load', () => {
        this.setGoogleMap()
        this.setMarkers()
      })
    }
  }

  componentDidUpdate (prevProps) {
    // if map is not ready, markers will be added in its load callback
    if (window.google && prevProps.events !== this.props.events) {
      this.setMarkers()
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
      <div className="map-container is-hidden-touch" ref={this.googleMapRef}/>
    )
  }

  setGoogleMap () {
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
    this.setState({ googleMap })
  }

  setMarkers () {
    const eventMarkers = []
    this.props.events.forEach(event => {
      if (event.location && event.location.lat && event.location.lng) {
        const latLng = new window.google.maps.LatLng(event.location.lat, event.location.lng)
        const marker = new window.google.maps.Marker({
          position: latLng,
          map: this.state.googleMap
        })
        const eventMarker = {
          eventId: event.id,
          marker: marker
        }
        marker.addListener('click', () => {
          this.props.history.push(`event/${event.id}`)
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
