import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "@components/Layout"

const PostTemplate = ({ data }) => {
  // this prop will be injected by the GraphQL query below.
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>

        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default PostTemplate
