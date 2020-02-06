import React from "react"

import Container from "@components/core/Container"
import PostsHighlighted from "@components/PostsHighlighted"
import PostGrid from "@components/PostGrid"
import Layout from "@components/Layout"
import SEO from "@components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <PostsHighlighted />

    <Container>
      <PostGrid />
    </Container>
  </Layout>
)

export default IndexPage
