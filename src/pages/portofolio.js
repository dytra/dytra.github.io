import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"

import constructionImage from "../images/in-construction.svg";
export default () => (
  <Layout>
    <SEO title="Portofolio" />
    <h1>Portofolio</h1>
    <img src={constructionImage} alt="In Construction" />
    <div style={{textAlign:'center'}}>
      <h3>Oops.. Sorry</h3>
      <p>This page is under painting...</p>
      <p>Please check again later</p>

    </div>
  </Layout>
)