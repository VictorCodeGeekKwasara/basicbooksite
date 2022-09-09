import React from "react"
import { Typography } from "@mui/material"
import Layout from "../components/layout"
import { container, typography, content } from "./about.module.css"
import Seo from "../components/seo"
const About = () => {
  return (
    <Layout>
      <div className={container}>
        <div className={typography}>
          <Typography variant="h4" color="primary" className={typography}>
            About
          </Typography>
        </div>
        <div className={content}>
          <Typography variant="p" color="textPrimary">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </Typography>
          <Typography variant="p" mt={2} color="textPrimary">
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from
            the 1914 translation by H. Rackham.
          </Typography>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default About
