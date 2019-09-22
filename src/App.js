import React from 'react'
import './App.scss'
import EventList from './components/EventList'
import GoogleMap from './components/GoogleMap'
import { getEvents } from './api/events'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { events: [] }
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
      <div className="root">
        <header className="navbar is-primary">
          <h1 className='navbar-brand is-size-3'>
            Actu-Lan
          </h1>
        </header>
        <main>
          <GoogleMap events={this.state.events}/>
          <div className="event-list-container section">
            <EventList events={this.state.events}/>
          </div>
        </main>
      </div>
    )
  }
}

export default App
