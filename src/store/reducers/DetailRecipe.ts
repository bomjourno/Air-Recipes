import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDetailRecipeItem } from '../../types/detailRecipe'

interface DetailRecipeState {
  recipe: {
    recipe: IDetailRecipeItem | null
  }
  isLoading: boolean
  error: string
}

const initialState: DetailRecipeState = {
  recipe: {
    recipe: null,
  },
  isLoading: false,
  error: '',
}

export const detailRecipeSlice = createSlice({
  name: 'detailRecipe',
  initialState,
  reducers: {
    detailRecipeFetching(state) {
      state.isLoading = true
    },
    detailRecipeFetchingSuccess(
      state,
      action: PayloadAction<{ recipe: IDetailRecipeItem }>,
    ) {
      state.isLoading = false
      state.error = ''
      state.recipe = action.payload
    },
    detailRecipeFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default detailRecipeSlice.reducer
