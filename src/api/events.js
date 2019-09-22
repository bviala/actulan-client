import events from '../constants/actuLanEvents'

const DELAY = 2000 // ms
const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events)
    }, DELAY)
  })
}

export { getEvents }
