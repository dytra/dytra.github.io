import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero";
import MyWorks from "../components/MyWorks";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MyWorks />

  </Layout>
)

export default IndexPage
