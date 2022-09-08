import React from 'react'
import Header from './header'
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles"

let theme = createTheme({
  palette: {
    primary: {
      main: "#DDB771",
    },
    secondary: {
      main:"#00E6DB",
    },
  },
})
theme = responsiveFontSizes(theme)

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  )
}

export default Layout