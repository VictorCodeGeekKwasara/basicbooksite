import { Box, Typography } from "@mui/material"
import React from "react"
import Layout from "../components/layout.js"
import {
  hero,
  typographyBox,
  greatSpan,
  bookCards,
  typesOne,
  typesTwo,
  typesThree,
  booksButton,
} from "./index.module.css"
import BookCard from "../components/BookCard.js"
import { Link, graphql } from "gatsby"
import { Button } from "@mui/material"
// import { CardActionArea } from "@mui/material"
import { getImage } from "gatsby-plugin-image"

// import socrates from "../images/socrates.jpg"

const styles = {
  typographyBox: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100vw",
    color: "white",
    marginTop: "10vh",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}

const Index = ({ data }) => {
  const dataArray = data.allMdx.nodes
  return (
    <Layout>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          overflowX: "hidden",
          display: "flex",
        }}
      >
        <div className={hero}></div>
        <div className={typographyBox}>
          <Typography variant="h2" className={typesOne}>
            Welcome To
          </Typography>
          <Typography variant="h1" className={typesTwo}>
            <span className={greatSpan}>Great</span> Reads
          </Typography>
          <Typography variant="h2" className={typesThree}>
            A site all about books and the love of books
          </Typography>
          <Button
            className={booksButton}
            size="large"
            variant="contained"
            component={Link}
            to="books"
          >
            Books
          </Button>
        </div>
      </Box>

      <Box className={bookCards}>
        {dataArray.map(
          ({ frontmatter: { title, slug, author, year, alt} }) => {
              const images = {
                "Ego is the enemy": "./egomini.jpg",
                "Socrates Express": "./socratesmini.jpg",
                "Man's search for meaning": "./mansmini.jpg",
              }

              const image = images[title]
            return (
              <article key={slug} style={{ display: "flex" }}>
                <BookCard
                  title={title}
                  author={author}
                  year={year}
                  alt={alt}
                  image={image}
                  slug={`books/${slug}`}
                />
              </article>
            )
          }
        )}
      </Box>
    </Layout>
  )
}

export const bookQuery = graphql`
query booksQuery{
    allMdx {
      nodes {
        frontmatter {
          alt
          author
          title
          slug
          year(formatString: "MMMM D,YYYY")
          
        }
      }
    }
  }
`

export default Index
