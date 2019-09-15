import React from 'react'
import './EventList.css'

function EventList (props) {
  return (
    props.events.map(event => (
      <div class="event">
        <span class="date">{event.date}</span>
        <span class="name">{event.name}</span>
      </div>
    ))
  )
}

export default EventList
