import React from 'react'
import './MapAndEvents.scss'
import EventList from '../components/EventList'
import GoogleMap from '../components/GoogleMap'
import { getEvents } from '../api/events'

class MapAndEvents extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [],
      hoveredEvent: null,
      hoveredMarker: null
    }
    this.onEventHoverChange = this.onEventHoverChange.bind(this)
    this.onMarkerHoverChange = this.onMarkerHoverChange.bind(this)
  }

  onEventHoverChange (id) {
    this.setState({
      hoveredEvent: id
    })
  }

  onMarkerHoverChange (id) {
    this.setState({
      hoveredMarker: id
    })
  }

  componentDidMount () {
    getEvents().then(events => {
      this.setState({
        events
      })
    })
  }

  render () {
    return (
      <div className="map-and-events">
        <GoogleMap
          events={this.state.events}
          hoveredEvent={this.state.hoveredEvent}
          onHoverChange={this.onMarkerHoverChange}
          history={this.props.history}/>
        <div className="event-list-container">
          <EventList
            events={this.state.events}
            hoveredMarker={this.state.hoveredMarker}
            onHoverChange={this.onEventHoverChange}
            history={this.props.history}/>
        </div>
      </div>
    )
  }
}

export default MapAndEvents
