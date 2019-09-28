import React from 'react'
import './EventList.scss'

class EventList extends React.Component {
  constructor (props) {
    super(props)

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter (id) {
    this.props.onHoverChange(id)
  }

  onMouseLeave () {
    this.props.onHoverChange(null)
  }

  render () {
    return (
      this.props.events.map(event => (
        <div
          key={event.id}
          className={`
            columns
            event
            is-size-5
            ${this.props.hoveredMarker === event.id ? 'highlighted' : null}
          `}
          onMouseEnter={() => this.onMouseEnter(event.id)}
          onMouseLeave={this.onMouseLeave}>
          <span className="column is-2">{event.date}</span>
          <span className="column has-text-weight-semibold">{event.name}</span>
        </div>
      ))
    )
  }
}

export default EventList
