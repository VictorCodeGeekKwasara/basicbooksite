import React from 'react'
import Header from './header'
import { Container } from "@mui/material"
// import { ThemeProvider, createTheme } from "@mui/material/styles"

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: ,
//     },
//     secondary: {
//       main: "#11cb5f",
//     },
//   },
// })
// theme={theme}

const Layout = ({children}) => {
  return (<>
            <Header/>
            {children}
          </>      
  )
}

export default Layout