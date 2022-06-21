import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilters } from '../../types/filters'
import { MAX_VALUE_SLIDER, MIN_VALUE_SLIDER } from '../../utils/constants'

const initialState: IFilters = {
  Caribbean: true,
  Greek: true,
  French: true,
  Indian: true,
  Chinese: true,
  calories: [MIN_VALUE_SLIDER, MAX_VALUE_SLIDER],
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
