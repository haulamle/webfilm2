import { NavigateFunction } from 'react-router-dom'

export const goToNextPage = (navigate: NavigateFunction, path: string) => {
  navigate(path)
}
