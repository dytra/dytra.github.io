import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
export default function Template({data}, /* This prop will be injected by the GraphQl query elow */) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;;

  return(
    <Layout>
    <SEO title="About" />
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.date}</p>
    <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
  </Layout>

  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`