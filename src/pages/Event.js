import React from 'react'
import { formatFRfromISO } from '../mixins/dateUtils'
import { getEvent } from '../api/eventsStub'
// import { getEvent } from '../api/events'
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
            </div>
          </section>
          <div className="columns columns-fix">
            <div className="column is-hidden-touch is-one-quarter"/>
            <div className="column is-primary is-size-4">
              <div className="event-info">
                {formatFRfromISO(this.state.event.startDate, "'Du' d MMMM yyyy 'à' H'h'")}
                <br></br>
                {formatFRfromISO(this.state.event.endDate, "'Au' d MMMM yyyy 'à' H'h'")}
              </div>
              <div className="event-info">
                {this.state.event.address}
                <br></br>
                {this.state.event.zipCode} {this.state.event.city}
              </div>
              <div className="event-info">
                {this.state.event.slotPrice}€
                <br></br>
                {this.state.event.slotNumber} places
              </div>
              <div className="event-info">
                <a href={this.state.event.website}>
                  {this.state.event.website}
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
