import React from 'react'
import './EventList.scss'

class EventList extends React.Component {
  constructor (props) {
    super(props)

    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onClick (id) {
    this.props.history.push(`/event/${id}`)
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
          onClick={() => this.onClick(event.id)}
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
