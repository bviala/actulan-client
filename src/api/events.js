import events from '../constants/actuLanEvents'

const DELAY = 500 // ms

const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events)
    }, DELAY)
  })
}

const getEvent = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id % 2 === 0) {
        resolve(events[0])
      } else {
        reject(new Error('lol'))
      }
    }, DELAY)
  })
}

export { getEvent, getEvents }
