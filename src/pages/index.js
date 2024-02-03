import React, { useEffect, useLayoutEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero";
import MyWorks from "../components/MyWorks";

const IndexPage = () => {
  useLayoutEffect(() => {
    document.location.href="https://dytra.github.io/v3"
  },[]);
  return (
    <Layout>
      {/* <SEO title="Home" />
      <Hero />
      <MyWorks /> */}

    </Layout>
  )
}

export default IndexPage
