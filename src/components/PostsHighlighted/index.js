import React, { useState, useEffect } from "react"
import Section from "@components/core/Section"

import { usePosts } from "hooks/posts"

import { Container, SubTitle, Title, Episode } from "./styled"

const PostGrid = () => {
  const { highlightedPosts } = usePosts()
  const [postIndex, setPostIndex] = useState(0)
  const selectedPost = highlightedPosts[postIndex]

  useEffect(() => {
    const timerId = setInterval(() => {
      const next = postIndex + 1
      setPostIndex(next === highlightedPosts.length ? 0 : next)
    }, 3000)

    return () => {
      clearInterval(timerId)
    }
  })

  return (
    <>
      <Section img={selectedPost.cover}>
        <Container href={selectedPost.path}>
          <Title>{selectedPost.title}</Title>
          <SubTitle>{selectedPost.description}</SubTitle>
          <Episode>{selectedPost.episode}</Episode>
        </Container>
      </Section>
    </>
  )
}

export default PostGrid
