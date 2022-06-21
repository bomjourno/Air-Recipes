import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    searchRecipe(state, action: PayloadAction<string>) {
      return action.payload
    },
  },
})

export default searchSlice.reducer
