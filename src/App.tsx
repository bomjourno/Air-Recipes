import React from 'react'
import { Header } from './components/Header/Header'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './utils/theme'
import { ItemsList } from './components/ItemsList/ItemsList'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ItemsList />
    </ThemeProvider>
  )
}

export default App
