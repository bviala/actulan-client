// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from './logo.svg'
import './App.css'

const fruits = [
  {
    name: 'pomme',
    like: true
  },
  {
    name: 'poire',
    like: true
  },
  {
    name: 'banane',
    like: false
  },
  {
    name: 'fraise',
    like: false
  },
  {
    name: 'cerise',
    like: true
  }
]

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          J'aime :
          <ul>
            {
              fruits.map(fruit => {
                if (fruit.like) {
                  return (
                    <li>les {fruit.name}s</li>
                  )
                } else {
                  return null
                }
              })
            }
          </ul>
        </p>
      </header>
    </div>
  )
}

export default App
