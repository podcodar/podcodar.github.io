import React from "react"

import Container from "@components/core/Container"
import PostsHighlighted from "@components/PostsHighlighted"
import Section from "@components/core/Section"
import PostGrid from "@components/PostGrid"
import Layout from "@components/Layout"
import SEO from "@components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section size="300">
      <Container>
        <PostsHighlighted></PostsHighlighted>
      </Container>
    </Section>

    <Container>
      <PostGrid />
    </Container>
  </Layout>
)

export default IndexPage
