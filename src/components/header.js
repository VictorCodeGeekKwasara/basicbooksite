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
  
  const styles ={
    appbar:{
      padding:"5%",
      display:"flex",
      flexDirection:"row",
      alignItems:"space-between", 
      height:"10vh"     
    },
    drawerBox: {
      marginLeft: "auto"    
    }
  }
  return (
    <AppBar component="nav" sx={styles.appbar}>
        <nav ref={boxRef}  className={linkBox} >
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="about">
            <Button>About</Button>
          </Link>
          <Link to="books">
            <Button>Books</Button>
          </Link>
          <Link to="contact">
            <Button>Contact</Button>
          </Link>
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