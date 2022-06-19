import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRecipeItem } from '../../types/recipes'

interface RecipeState {
  recipes: {
    recipes: IRecipeItem[]
  }
  isLoading: boolean
  error: string
}

const initialState: RecipeState = {
  recipes: {
    recipes: [],
  },
  isLoading: false,
  error: '',
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    recipesFetching(state) {
      state.isLoading = true
    },
    recipesFetchingSuccess(
      state,
      action: PayloadAction<{ recipes: IRecipeItem[] }>,
    ) {
      state.isLoading = false
      state.error = ''
      state.recipes = action.payload
    },
    recipesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default recipeSlice.reducer
