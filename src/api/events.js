import axios from 'axios'
const baseURL = 'http://localhost:1337'

const getEvents = () => {
  // todo add filter endDate gt now
  return axios.get(`${baseURL}/events?_sort=startDate:ASC`)
    .then(res => res.data)
}

const getEvent = id => {
  return axios.get(`${baseURL}/events/${id}`)
    .then(res => res.data)
}

export { getEvents, getEvent }
