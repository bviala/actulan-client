import React from 'react'
import './App.scss'
import EventList from './EventList'
import events from './actuLanEvents'

const GOOGLE_MAP_API_KEY = 'AIzaSyBap_M_mBL76MdmgdouS9l3vBwMxEkXbcs'

class App extends React.Component {
  googleMapRef = React.createRef()

  componentDidMount() {
    const googleScript = document.createElement('script')
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
    window.document.body.appendChild(googleScript)

    googleScript.addEventListener('load', () => {
      this.googleMap = this.createGoogleMap()
    })
  }

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 16,
      center: {
        lat: 43.642567,
        lng: -79.387054,
      },
      disableDefaultUI: true,
    })

  render () {
    return (
      <div className="root">
        <header className="navbar">
          <h1 className='navbar-brand has-text-primary is-size-3'>
            Actu-Lan
          </h1>
        </header>
        <main>
          <div id='map' className="map-container" ref={this.googleMapRef}>
            lol
          </div>
          <div className="event-list-container section">
            <EventList events={events}/>
          </div>
        </main>
      </div>
    )
  }
}

export default App
