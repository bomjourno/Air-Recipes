import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Gilroy',
      fontWeight: 800,
      fontSize: '64px',
      lineHeight: '80px',
    },
    h2: {
      fontFamily: 'Gilroy',
      fontWeight: 800,
      fontSize: '40px',
      lineHeight: '48px',
    },
    h5: {
      fontFamily: 'Gilroy',
      fontWeight: 800,
      fontSize: '24px',
      lineHeight: '28px',
    },
    subtitle1: {
      lineHeight: '24px',
      color: '#82786a',
    },
    body1: {
      lineHeight: '24px',
    },
  },
  palette: {
    primary: {
      // light: '#DDDDDD',
      main: '#ddd',
      // dark: '#82786A',
    },
    secondary: {
      main: '#a9a9a9',
    },
  },
})
