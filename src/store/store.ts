import { combineReducers, configureStore } from '@reduxjs/toolkit'
import recipeReducer from './reducers/RecipeSlice'
import filterReducer from './reducers/FilterSlice'
import searchReducer from './reducers/SearchSlice'
import detailReducer from './reducers/DetailRecipe'

const rootReducer = combineReducers({
  recipeReducer,
  filterReducer,
  searchReducer,
  detailReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
