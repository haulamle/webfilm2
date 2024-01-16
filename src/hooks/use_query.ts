import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useQuery = () => {
  const [search, setSearch] = useSearchParams()

  const query: any = useMemo(() => Object.fromEntries(new URLSearchParams(search)), [search])

  const searchParams = {
    get: (key: string) => query[key],
    set: (newParams: { [key: string]: string }) => setSearch(newParams),
    delete: (params: string) => {
      search.delete(params)
      setSearch(search)
    }
  }

  return searchParams
}
