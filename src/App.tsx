import React from 'react'
import { Header } from './components/Header/Header'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './utils/theme'
import { ItemsList } from './components/ItemsList/ItemsList'
import { Route, Routes } from 'react-router-dom'
import { fetchDetailRecipe } from './store/reducers/ActionCreators'
import { DetailItem } from './components/DetailItem/DetailItem'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path='/' element={<ItemsList />} />
        <Route path='/:recipe' element={<DetailItem />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
