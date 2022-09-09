import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import {container} from "./footer.module.css"
import { Button } from '@mui/material'

const Footer = () => {

  return (
    <div className={container}>
      <Button
        component="a"
        href="https://www.instagram.com/professor_cypher/"
        variant="contained"
        endIcon={<InstagramIcon />}
      >
        Instagram
      </Button>
      <Button
        component="a"
        href="https://www.linkedin.com/in/victor-kwasara-7a1b06229/"
        variant="contained"
        endIcon={<LinkedInIcon />}
      >
        LinkedIn
      </Button>
    </div>
  )
}

export default Footer