import { format, parseISO } from 'date-fns'
import frLocale from 'date-fns/locale/fr'

const formatFR = (date, formatString) => {
  return format(date, formatString, { locale: frLocale })
}

const formatFRfromISO = (isoDate, formatString) => {
  return formatFR(parseISO(isoDate), formatString)
}

export { formatFR, formatFRfromISO }
