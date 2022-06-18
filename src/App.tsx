import React from 'react'
import { Header } from './components/Header/Header'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './utils/theme'
import '@fontsource/roboto/400.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='page'>
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
