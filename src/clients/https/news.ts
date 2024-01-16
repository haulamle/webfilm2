import { INews } from 'src/types/news'
import ClientBase from './base'

export interface ClientNewsMix {
  getNews: () => Promise<INews[]>
}

const ClientNews = <TBase extends Constructor<ClientBase>>(superclass: TBase) =>
  class extends superclass implements ClientNewsMix {
    getNews = async () => {
      return this.doFetch<INews[]>(`${this.getBaseRoute()}/news`, {
        method: 'get'
      })
    }
  }

export default ClientNews
