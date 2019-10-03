import { format } from 'date-fns'
import frLocale from 'date-fns/locale/fr'

const formatFR = (date, formatString) => {
  return format(date, formatString, { locale: frLocale })
}

export { formatFR }
