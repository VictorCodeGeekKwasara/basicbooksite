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
import { Link,graphql } from "gatsby"
import {Button} from "@mui/material"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
// import socrates from "../images/socrates.jpg"

const Index = ({data}) => {
  const dataArray = data.allMdx.nodes;  
  console.log(dataArray) 
  return (
    <Layout>
      <Box sx={{ width: "100vw", height: "100vh", overflowX: "hidden" }}>
        <Box className={hero}></Box>
        <Box className={typographyBox}>
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
            variant="contained"
            component={Link}
            to="books"
          >
            Books
          </Button>
        </Box>
      </Box>

      <Box className={bookCards} >
        {
          dataArray.map(({frontmatter:{title,slug,author,year,alt,image}})=>
         {    const img = getImage(image)     
              return (
              <BookCard title={title} author={author} year={year} alt={alt} image={img} slug={slug}/>
             )  
                                
          })
        }        
      </Box>
    </Layout>
  )
}

 export const bookQuery = graphql`
   {
     allMdx {
       nodes {
         frontmatter {
           alt
           author
           title
           slug
           year(formatString: "MMMM D,YYYY")
           image {
             childImageSharp {
               gatsbyImageData
             }
           }
         }
       }
     }
   }
 `

export default Index
