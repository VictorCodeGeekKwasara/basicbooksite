import React from 'react'
import Header from './header'
import Footer from './footer'
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
      main: "#00E6DB",
    },

    text: {
      primary: "#ccfffc",
    },
  },
})
theme = responsiveFontSizes(theme)

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{overflowX:"hidden"}}>
       <Header />
      {children} 
       <Footer/>
      </div>
      
    </ThemeProvider>
  )
}

export default Layout