import React from 'react'
import { getEvent } from '../api/eventsStub'
import './Event.scss'

class Event extends React.Component {
  constructor () {
    super()
    this.state = {
      event: null
    }
  }

  componentDidMount () {
    getEvent(this.props.match.params.id)
      .then(event => {
        this.setState({ event })
      })
      .catch(error => console.error(error))
  }

  render () {
    if (!this.state.event) {
      return null
    } else {
      return (
        <div className='event-page'>
          <section className='hero is-light'>
            <div className="container">
              <h1 className="title">
                {this.state.event.name}
              </h1>
              {/* <h2 class="subtitle">
                Hero subtitle
              </h2> */}
            </div>
          </section>
          <div className="columns columns-fix">
            <div className="column is-hidden-touch is-one-quarter"/>
            <div className="column is-primary is-size-4">
              <div className="event-info">
                Du 29 septembre 2019 à 19h
                <br></br>
                Au 30 septembre 2019 à 3h
              </div>
              <div className="event-info">
                8 rue de la Véga
                <br></br>
                75012 Paris
              </div>
              <div className="event-info">
                100 places - 10€
              </div>
              <div className="event-info">
                <a href="valenciennes-game-arena.com">
                  valenciennes-game-arena.com
                </a>
              </div>
            </div>
            <div className="column is-hidden-touch is-one-quarter"/>
          </div>
        </div>
      )
    }
  }
}

export default Event
