import React,{useState,useEffect, useRef} from 'react'
import { Link } from 'gatsby'
import { Button, Box } from "@mui/material"
import { AppBar } from "@mui/material"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import {drawerIcon,linkBox ,linkBoxActive} from './hearder.module.css'

const Header = () => {
  // const [mobile,setMobile] = useState(true);
  const [drawer,setDrawer] = useState(false);
 
  const boxRef = useRef();

  useEffect(()=>{    
 
    
  },[])

  const handleDrawer =() =>{
     
     if(!drawer){
      console.log(linkBoxActive)
      boxRef.current.classList.toggle(linkBoxActive)
     }else {
       boxRef.current.classList.toggle(linkBoxActive)
     }
     setDrawer(!drawer)    
    }
  
  const styles = {
    appbar: theme => ({
      padding: "5%",
      display: "flex",
      flexDirection: "row",
      alignItems: "space-between",
      height: "10vh",
      backgroundColor:"transparent",
      [theme.breakpoints.up("md")]: {
        backgroundColor: "white",
        opacity: 1,
      },
    }),
    drawerBox: {
      marginLeft: "auto",
    },
  }
  return (
    <AppBar component="nav" sx={styles.appbar}>
      <nav ref={boxRef} className={linkBox}>
        <Button variant="contained" component={Link} to="/">
          Home
        </Button>
        <Button variant="contained" component={Link} to="/about">
          About
        </Button>
        <Button variant="contained" component={Link} to="books">
          Books
        </Button>
        <Button variant="contained" component={Link} to="contact">
          Contact
        </Button>
      </nav>
      <Box sx={styles.drawerBox} className={drawerIcon}>
        {drawer ? (
          <CloseRoundedIcon onClick={handleDrawer} />
        ) : (
          <MenuRoundedIcon onClick={handleDrawer} />
        )}
      </Box>
    </AppBar>
  )
}

export default Header