import { api } from '../../service/Api'
import { AppDispatch } from '../store'
import { detailRecipeSlice } from './DetailRecipe'
import { recipeSlice } from './RecipeSlice'

export const fetchRecipes = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(recipeSlice.actions.recipesFetching())
    const response = await api.getItems()
    dispatch(recipeSlice.actions.recipesFetchingSuccess(response.data))
  } catch (e: any) {
    dispatch(recipeSlice.actions.recipesFetchingError(e.message))
  }
}

export const fetchDetailRecipe =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(detailRecipeSlice.actions.detailRecipeFetching())
      const response = await api.getItem(id)
      dispatch(
        detailRecipeSlice.actions.detailRecipeFetchingSuccess(response.data),
      )
    } catch (e: any) {
      dispatch(detailRecipeSlice.actions.detailRecipeFetchingError(e.message))
    }
  }
