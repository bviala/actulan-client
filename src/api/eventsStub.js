// copy-pasted + linted from the API
const events = [{ id: 2, name: 'MEXILAN party', startDate: '2019-10-05T18:00:00.000Z', endDate: '2019-10-06T03:00:00.000Z', slotNumber: 24, slotPrice: 8, website: 'mosellanproject.fr', address: 'MJC Metz-Sud', zipCode: 57000, city: 'Metz', latitude: 49.113014, longitude: 6.185324, created_at: '2019-10-03T08:23:49.229Z', updated_at: '2019-10-03T11:19:31.673Z' }, { id: 1, name: 'Game Arena #03', startDate: '2019-10-11T20:00:00.000Z', endDate: '2019-10-13T19:00:00.000Z', slotNumber: 350, slotPrice: 40, website: 'valenciennes-game-arena.com', address: '1, Esplanade des Rives Créatives de l’Escaut', zipCode: 59410, city: 'Anzin', latitude: 50.373458, longitude: 3.507967, created_at: '2019-09-30T15:06:35.716Z', updated_at: '2019-10-03T11:24:58.271Z' }, { id: 3, name: 'LANOWEEN ARENA 2019', startDate: '2019-10-19T10:00:00.000Z', endDate: '2019-10-20T17:00:00.000Z', slotNumber: 100, slotPrice: 10, website: 'comeandplay.fr', address: null, zipCode: 70400, city: 'Héricourt', latitude: 47.576238, longitude: 6.760619, created_at: '2019-10-03T08:27:40.708Z', updated_at: '2019-10-03T11:25:17.576Z' }]

const DELAY = 500 // ms

const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events)
    }, DELAY)
  })
}

const getEvent = (id) => {
  // eslint-disable-next-line eqeqeq
  const event = events.find(event => event.id == id)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(event)
    }, DELAY)
  })
}

export { getEvent, getEvents }
