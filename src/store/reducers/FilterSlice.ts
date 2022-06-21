import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilters } from '../../types/filters'

const initialState: IFilters = {
  Caribbean: true,
  Greek: true,
  French: true,
  Indian: true,
  Chinese: true,
  calories: [100, 1200],
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilters(state, action: PayloadAction<IFilters>) {
      return action.payload
    },
  },
})

export default filterSlice.reducer
