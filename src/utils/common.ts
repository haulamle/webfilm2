import moment from 'moment'
import { NavigateFunction } from 'react-router-dom'

export const goToNextPage = (navigate: NavigateFunction, path: string) => {
  navigate(path)
}

export const momentLocale = (date: string) => {
  moment.updateLocale('vi', {})
  return moment(date).fromNow()
}
