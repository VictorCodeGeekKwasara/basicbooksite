import { Box, Typography } from "@mui/material"
import React from "react"
import Layout from "../components/layout.js"
import { hero, typographyBox, greatSpan , bookCards, bookCard} from "./index.module.css"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"

const Index = () => {
  return (
    <Layout>
      <Box sx={{ width: "100vw", height: "100vh", overflowX: "hidden" }}>
        <Box className={hero}></Box>
        <Box className={typographyBox}>
          <Typography variant="h2">Welcome To</Typography>
          <Typography variant="h1">
            {" "}
            <span className={greatSpan}>Great</span> Reads
          </Typography>
          <Typography variant="h2">
            A site all about books and the love of books
          </Typography>
        </Box>
      </Box>

      <Box className={bookCards}>
        <Card className={bookCard}>
          <CardMedia
            component="img"
            height="140"
            image="./socrates.jpg"
            alt="green iguana"
          />
        </Card>
        <Card className={bookCard}>
          <CardMedia
            component="img"
            height="140"
            image="./socrates.jpg"
            alt="green iguana"
          />
        </Card>
        <Card className={bookCard}>
          <CardMedia
            component="img"
            height="140"
            image="./ego.jpg"
            alt="green iguana"
          />
        </Card>
      </Box>
      <h2>I am an H2</h2>
    </Layout>
  )
}

export default Index
