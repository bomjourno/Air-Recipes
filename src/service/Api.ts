import axios from 'axios'
import { IRecipeItem } from '../types/recipes'

class Api {
  private baseUrl: string
  constructor(props: { baseUrl: string }) {
    this.baseUrl = props.baseUrl
  }

  getItems() {
    return axios.get<{ recipes: IRecipeItem[] }>(`${this.baseUrl}`)
  }
}

export const api = new Api({
  baseUrl: 'https://test.kode-t.ru/list.json',
})
