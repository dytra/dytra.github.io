import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <p>I'm <strong>Widhi</strong>, Frontend Web Developer at Jagain.com</p>
    <p>I like to describe my self as one of the artist+craftsman in the digital world.</p>
    <p>Wanna know more about me? Jump to <Link to="/about">About</Link> page.</p>
   
  </Layout>
)

export default IndexPage
