import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import BookCard from "../../components/BookCard"
import { Box, Typography } from "@mui/material"
import { bookCards,typography,container } from "./books.module.css"
import Seo from "../../components/seo"

const Books = ({ data }) => {
  const dataArray = data.allMdx.nodes
  const images = {
    "Ego is the enemy": "./egomini.jpg",
    "Socrates Express": "./socratesmini.jpg",
    "Man's search for meaning": "./mansmini.jpg",
  }
  return (
    <Layout>
      <div className={container}>
<div className={typography}>
        <Typography variant="h4" color="primary" className={typography}>
          Books
        </Typography>
      </div>
      <Box className={bookCards}>
        {dataArray.map(
          ({ frontmatter: { title, slug, author, year, alt } }) => {
            const image = images[title]
            return (
              <article key={slug} style={{ display: "flex" }}>
                <BookCard
                  title={title}
                  author={author}
                  year={year}
                  alt={alt}
                  image={image}
                  slug={slug}
                />
              </article>
            )
          }
        )}
      </Box>
      <Box className={bookCards}>
        {dataArray.map(
          ({ frontmatter: { title, slug, author, year, alt } }) => {
            const image = images[title]
            return (
              <article key={slug} style={{ display: "flex" }}>
                <BookCard
                  title={title}
                  author={author}
                  year={year}
                  alt={alt}
                  image={image}
                  slug={slug}
                />
              </article>
            )
          }
        )}
      </Box>
      <Box className={bookCards}>
        {dataArray.map(
          ({ frontmatter: { title, slug, author, year, alt } }) => {
            const image = images[title]
            return (
              <article key={slug} style={{ display: "flex" }}>
                <BookCard
                  title={title}
                  author={author}
                  year={year}
                  alt={alt}
                  image={image}
                  slug={slug}
                />
              </article>
            )
          }
        )}
      </Box>
      </div>
      
    </Layout>
  )
}

export const bookQuery = graphql`
  query booksPageQuery {
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
export const Head = () => <Seo title="Books" />
export default Books
