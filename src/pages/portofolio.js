import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"

import constructionImage from "../images/in-construction.svg";
export default () => (
  <Layout>
    <SEO title="Portofolio" />
    <h1>Portofolio</h1>
    <center><img src={constructionImage} alt="In Construction" style={{ maxWidth: '500px',marginBottom:'1em',width:'100%' }} /></center>
    <div style={{ textAlign: 'center' }}>
      <h3>Oops.. Sorry</h3>
      <p>This page is under painting...</p>
      <p>Please check again later</p>

    </div>
  </Layout>
)