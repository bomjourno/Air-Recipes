export interface IDetailRecipeItem {
  id: number
  title: string
  description: string
  caloricity: number
  cookTime: number
  thumbnail: string
  images: [string]
  cuisine: {
    id: number
    title: string
  }
  difficulty: string
  ingredients: [string]
  instructions: [string]
}
