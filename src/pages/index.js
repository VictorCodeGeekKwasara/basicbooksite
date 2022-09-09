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
import Seo from  "../components/seo"

const Index = ({ data }) => {
  const dataArray = data.allMdx.nodes
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: "100vw",
          minHeight: "100vh",
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
export const Head = () => <Seo title="Home" />
export default Index
