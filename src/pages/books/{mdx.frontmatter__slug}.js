import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../../components/layout'
import { container, textContainer } from "./book.module.css"
import { Typography } from '@mui/material'
import Seo from "../../components/seo"
const Book = ({data,children}) => {
  const {title,author,slug,alt,year,book_cover} = data.mdx.frontmatter
  const img = getImage(book_cover)
  console.log(data)

  return (
    <Layout >
      <div style={{color:"white"}} className={container}> 
          <GatsbyImage image={img} alt={alt} />  
          <div className={textContainer}>
           <Typography component="h1" variant="div" >{title}</Typography>
           <Typography component="p" variant="body2" >{children}</Typography>
           
          </div>          
      </div>
    </Layout>
 
  )
}

export const bookquery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        year(formatString: "MMM D, YYYY")
        title
        slug
        alt
        author
        book_cover {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="" />
export default Book