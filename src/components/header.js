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
      alignItems: "space-around",
      
      height: "10vh",
      backgroundColor: "transparent",
      [theme.breakpoints.up("md")]: {
        opacity: 1,
        position: "absolute",
        backgroundColor: "#001712",
        height: "12vh",
        padding: 0,
      },
    }),
    drawerBox: {
      marginLeft: "auto",
    },
    button: theme => ({
      [theme.breakpoints.up("md")]: {
        backgroundColor: "transparent",
        color: "#DDB771",
        border: "none",
        boxShadow: "none",
        
        "&:hover": {
          backgroundColor: "transparent",
          color: "#f3d397",
          boxShadow: "none",
          fontSize: "16px" ,
        },
      },
    }),
  }
  return (
    <AppBar component="nav" sx={styles.appbar}>
      <nav ref={boxRef} className={linkBox}>
        <Button sx={styles.button} variant="contained" component={Link} to="/">
          Home
        </Button>
        <Button
          sx={styles.button}
          variant="contained"
          component={Link}
          to="/about"
        >
          About
        </Button>
        <Button
          sx={styles.button}
          variant="contained"
          component={Link}
          to="/books"
        >
          Books
        </Button>
        <Button
          sx={styles.button}
          variant="contained"
          component={Link}
          to="/contact"
        >
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