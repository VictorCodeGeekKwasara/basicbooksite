import React from "react"
import { Typography, Card } from "@mui/material"
import { Link } from "gatsby"
import { cardMedia, cardText, bookCard } from "./bookcard.module.css"

const styles = {
  bookcard: {
    backgroundColor: "#001712",
    color: "primary.main",
    transition: "background-color 1s ease",
    "&:hover": {
      backgroundColor: "rgba(30,53,48)",
      color: "primary.main",
      width:"91.5vw",
      height:"31vh",
    },
  },
}

const BookCard = ({ title, author, year, alt, slug, image }) => {
  return (
    <Card
      sx={styles.bookcard}
      component={Link}
      to={`${slug}`}
      className={bookCard}
    >
      <img src={image} alt={alt} className={cardMedia} />
      <div className={cardText}>
        <div>
          <Typography variant="h6" component="span">
            Title:
          </Typography>
          <Typography variant="p" pl={1}>
            {title}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="span">
            Author:
          </Typography>
          <Typography variant="p" pl={1}>
            {" "}
            {author}
          </Typography>
        </div>
        <div>
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
