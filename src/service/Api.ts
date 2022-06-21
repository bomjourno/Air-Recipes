import axios from 'axios'
import { IDetailRecipeItem } from '../types/detailRecipe'
import { IRecipeItem } from '../types/recipes'

class Api {
  private baseUrl: string
  constructor(props: { baseUrl: string }) {
    this.baseUrl = props.baseUrl
  }

  getItems() {
    return axios.get<{ recipes: IRecipeItem[] }>(`${this.baseUrl}/list.json`)
  }

  getItem(id: number) {
    return axios.get<{ recipe: IDetailRecipeItem }>(
      `${this.baseUrl}/detail_${id}.json`,
    )
  }
}

export const api = new Api({
  baseUrl: 'https://test.kode-t.ru/',
})
