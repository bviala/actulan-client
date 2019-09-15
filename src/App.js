import React from 'react'
import './App.css'
import EventList from './EventList'
import events from './actuLanEvents'

function App () {
  return (
    <div className="root">
      <header>
        <h1>
          Actu-Lan
        </h1>
      </header>
      <main>
        <div class="map-container">
          lol
        </div>
        <div class="event-list-container">
          <EventList events={events}/>
        </div>
      </main>
    </div>
  )
}

export default App
