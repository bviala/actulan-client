import React from 'react'
import './App.scss'
import EventList from './components/EventList'
import GoogleMap from './components/GoogleMap'
import { getEvents } from './api/events'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [],
      hoveredEvent: null
    }
    this.onHoverChange = this.onHoverChange.bind(this)
  }

  onHoverChange (id) {
    this.setState({
      hoveredEvent: id
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
      <div className="root">
        <header className="navbar is-primary">
          <h1 className='navbar-brand is-size-3'>
            Actu-Lan
          </h1>
        </header>
        <main>
          <GoogleMap
            events={this.state.events}
            hoveredEvent={this.state.hoveredEvent}/>
          <div className="event-list-container section">
            <EventList
              events={this.state.events}
              onHoverChange={this.onHoverChange}/>
          </div>
        </main>
      </div>
    )
  }
}

export default App
