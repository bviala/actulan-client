import events from '../constants/actuLanEvents'

const DELAY = 500 // ms
const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events)
    }, DELAY)
  })
}

export { getEvents }
