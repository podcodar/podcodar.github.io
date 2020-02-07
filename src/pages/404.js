import React from "react"

import Container from "@components/core/Container"
import Layout from "@components/Layout"
import SEO from "@components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container center>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
