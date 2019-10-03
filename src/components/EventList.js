import React from 'react'
import { parseISO, getDate } from 'date-fns'
import { formatFR } from '../mixins/dateUtils'

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
      <div className="events">
        {this.props.events.map(event => (
          <div
            key={event.id}
            className={`
              columns
              is-mobile
              event
              is-size-5
              ${this.props.hoveredMarker === event.id ? 'highlighted' : null}
            `}
            onClick={() => this.onClick(event.id)}
            onMouseEnter={() => this.onMouseEnter(event.id)}
            onMouseLeave={this.onMouseLeave}>
            <div className="column is-3 has-text-right">
              <div>{getDate(parseISO(event.startDate))}</div>
              <div>{formatFR(parseISO(event.startDate), 'MMMM')}</div>
            </div>
            <div className="column has-text-weight-light is-size-4 event-name">
              <span>{event.name}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default EventList
