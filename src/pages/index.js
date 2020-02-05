import React from "react"

import Container from "@components/core/Container"
import Section from "@components/core/Section"
import PostGrid from "@components/PostGrid"
import Layout from "@components/Layout"
import Image from "@components/image"
import SEO from "@components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <Container>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Container>
    </Section>

    <Container>
      <PostGrid />
    </Container>
  </Layout>
)

export default IndexPage
