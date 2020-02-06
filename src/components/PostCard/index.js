import React from "react"
import Gravatar from "react-gravatar"

import { Container, Content, Author } from "./styled"

const PostCard = ({ item }) => {
  return (
    <Container href={item.path} target="_blank">
      <img src={item.cover} alt="" />

      <Content>
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        <Author>
          <Gravatar email={item.author_email} />
          <span>{item.author_name}</span>
        </Author>
      </Content>
    </Container>
  )
}

export default PostCard
