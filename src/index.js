import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './index.scss'
import MapAndEvents from './pages/MapAndEvents'
import Event from './pages/Event'

function App () {
  return (
    <div className="root">
      <header className="navbar is-primary">
        <Link to='/'>
          <h1 className='navbar-brand is-size-4'>
            Actu-Lan
          </h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/event/:id" component={Event}/>
          {/* If none of the previous routes render anything,
              this route acts as a fallback.

              Important: A route with path="/" will *always* match
              the URL because all URLs begin with a /. So that's
              why we put this one last of all */}
          <Route path="/" component={MapAndEvents} />
        </Switch>
      </main>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'))
