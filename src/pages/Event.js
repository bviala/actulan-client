import React from 'react'

function Event ({ match }) {
  return (
    <div>{match.params.id}</div>
  )
}

export default Event
