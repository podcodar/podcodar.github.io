import React, { useState, useEffect } from "react"
import Section from "@components/core/Section"

import { usePosts } from "hooks/posts"
import { useImages } from "hooks/images"

import { Container, SubTitle, Title, Episode, Image } from "./styled"

const PostGrid = () => {
  const { highlightedPosts } = usePosts()
  const [postIndex, setPostIndex] = useState(0)
  const selectedPost = highlightedPosts[postIndex]
  const { getImage } = useImages()
  const postMarkImage = getImage("post-mark")

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
          <Episode>{selectedPost.episode}</Episode>
          <Title>{selectedPost.title}</Title>
          <SubTitle>{selectedPost.description}</SubTitle>

          <Image fluid={postMarkImage.fluid} />
        </Container>
      </Section>
    </>
  )
}

export default PostGrid
