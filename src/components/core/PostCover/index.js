import React from "react"
import Section from "@components/core/Section"

import { useImages } from "hooks/images"

import { Container, SubTitle, Title, Episode, Image, Duration } from "./styled"

const PostGrid = ({ cover, path, episode, title, description, duration }) => {
  const { getImage } = useImages()
  const postMarkImage = getImage("post-mark")

  return (
    <>
      <Section img={cover}>
        <Container href={path}>
          <Episode>{episode}</Episode>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>

          <Duration>{duration}</Duration>
          <Image fluid={postMarkImage.fluid} />
        </Container>
      </Section>
    </>
  )
}

export default PostGrid
