export interface IRecipeItem {
  id: number
  title: string
  description: string
  caloricity: number
  cookTime: number
  thumbnail: string
  cuisine: {
    id: number
    title: string
  }
}
