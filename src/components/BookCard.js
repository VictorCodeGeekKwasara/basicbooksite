import React from "react"
import { CardActionArea } from "@mui/material"
import { Box, Typography } from "@mui/material"
import { Link } from "gatsby"
import {
  cardMedia,
  cardText,
  bookActionArea,
  cardTextInner,
  bookCard,
} from "./bookcard.module.css"
import { GatsbyImage } from "gatsby-plugin-image"


const BookCard = ({image,title,author,year,alt,slug}) => {
  console.log(image +" "+ title)
  return (
    <Box className={bookCard}>
      <CardActionArea component={Link} to={"books/" +slug} className={bookActionArea}>
        
        <GatsbyImage image={image} alt={alt} className={cardMedia} />
        
        <Box className={cardText}>
          <Box className={cardTextInner}>
            <Typography variant="h4">Title:</Typography>
            <Typography variant="p" pl={1}>
              {title}
            </Typography>
          </Box>
          <Box className={cardTextInner}>
            <Typography variant="h4">Author:</Typography>
            <Typography variant="p" pl={1}>
              {" "}
              {author}
            </Typography>
          </Box>
          <Box className={cardTextInner}>
            <Typography variant="h4">Year:</Typography>
            <Typography variant="p" pl={1}>
              {" "}
              {year}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Box>
  )
}

export default BookCard
