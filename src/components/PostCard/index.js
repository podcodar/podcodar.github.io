import React from "react"
import AuthorProfile from "@components/core/AuthorProfile"

import { Container, Content } from "./styled"

const PostCard = ({ item }) => {
  return (
    <Container href={item.path}>
      <img src={item.cover} alt="" />

      <Content>
        <h4>{item.title}</h4>
        <h6>{item.duration || item.readingTime}</h6>
        <p>{item.description}</p>

        <AuthorProfile item={item} />
      </Content>
    </Container>
  )
}

export default PostCard
