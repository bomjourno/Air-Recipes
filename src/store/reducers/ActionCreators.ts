import { api } from '../../service/Api'
import { AppDispatch } from '../store'
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
