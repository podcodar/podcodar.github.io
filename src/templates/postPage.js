import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "@components/Layout"
import Container from "@components/core/Container"
import PostCover from "@components/core/PostCover"

const PostTemplate = ({ data }) => {
  // this prop will be injected by the GraphQL query below.
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      <PostCover {...frontmatter} />
      <Container className="blog-post">
        <h3>{frontmatter.date}</h3>

        <MDXRenderer>{body}</MDXRenderer>
      </Container>
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
        cover
        episode
        duration
        author_name
        author_email
      }
    }
  }
`

export default PostTemplate
