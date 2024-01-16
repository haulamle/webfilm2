import { IMovie } from 'src/types/movie'
import ClientBase from './base'

export interface ClientMoviesMix {
  getMovies: () => Promise<IMovie[]>
}

const ClientMovies = <TBase extends Constructor<ClientBase>>(superclass: TBase) =>
  class extends superclass implements ClientMoviesMix {
    getMovies = async () => {
      return this.doFetch<IMovie[]>(`${this.getBaseRoute()}/movie`, {
        method: 'get'
      })
    }
  }

export default ClientMovies
