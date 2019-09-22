import React from 'react'
import './App.scss'
import EventList from './components/EventList'
import GoogleMap from './components/GoogleMap'
import events from './constants/actuLanEvents'

function App () {
  return (
    <div className="root">
      <header className="navbar is-primary">
        <h1 className='navbar-brand is-size-3'>
          Actu-Lan
        </h1>
      </header>
      <main>
        <GoogleMap/>
        <div className="event-list-container section">
          <EventList events={events}/>
        </div>
      </main>
    </div>
  )
}

export default App
