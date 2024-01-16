import mix from 'src/utils/mix'
import ClientBase from './base'
import ClientMovies, { ClientMoviesMix } from './movie'
import ClientNews, { ClientNewsMix } from './news'

interface Client extends ClientBase, ClientMoviesMix, ClientNewsMix {}

class Client extends mix(ClientBase).with(ClientMovies, ClientNews) {
  constructor() {
    super()
  }
}

const client = new Client()

export default client
