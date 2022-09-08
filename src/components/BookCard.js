import React from "react"
import { CardActionArea } from "@mui/material"
import { Box, Typography,Card } from "@mui/material"
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
    <Card
      sx={{ backgroundColor: "#001712", color: "primary.main" }}
      component={Link}
      to={`books/${slug}`}
      className={bookCard}
    >
      <GatsbyImage image={image} alt={alt} className={cardMedia} />
      <div className={cardText}>
        <div className={cardTextInner}>
          <Typography variant="h6" component="span">
            Title:
          </Typography>
          <Typography variant="p" pl={1}>
            {title}
          </Typography>
        </div>
        <div className={cardTextInner}>
          <Typography variant="h6" component="span">
            Author:
          </Typography>
          <Typography variant="p" pl={1}>
            {" "}
            {author}
          </Typography>
        </div>
        <div className={cardTextInner}>
          <Typography variant="h6" component="span">
            Year:
          </Typography>
          <Typography variant="p" pl={1}>
            {" "}
            {year}
          </Typography>
        </div>
      </div>
    </Card>
  )
}

export default BookCard
