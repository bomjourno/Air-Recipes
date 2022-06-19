import { combineReducers, configureStore } from '@reduxjs/toolkit'
import recipeReducer from './reducers/RecipeSlice'

const rootReducer = combineReducers({
  recipeReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
