import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import { Header } from './components/Header/Header'
import { ItemsList } from './components/ItemsList/ItemsList'
import { DetailItem } from './components/DetailItem/DetailItem'

import { theme } from './utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path='/Air-Recipes' element={<ItemsList />} />
        <Route path='/Air-Recipes/:recipe' element={<DetailItem />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
