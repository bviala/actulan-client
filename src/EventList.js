import React from 'react'
import './EventList.scss'

function EventList (props) {
  return (
    props.events.map(event => (
      <div className="columns event is-size-4">
        <span className="column is-2">{event.date}</span>
        <span className="column has-text-weight-semibold">{event.name}</span>
      </div>
    ))
  )
}

export default EventList
