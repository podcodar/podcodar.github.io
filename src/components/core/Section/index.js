import React from "react"
import styled from "styled-components"
import CoreContainer from "@components/core/Container"

import { colors } from "helpers/theme"

const SectionContainer = styled.section`
  width: 100%;
  height: 600px;
  background-color: ${colors.secondary};
  position: relative;
`

const SectionImage = styled.div`
  height: 100%;
  background-color: ${colors.secondary};
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Overlay = styled.div`
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.2;
  margin-top: -600px;
  /* filter: blur(5px); */
`

const Container = styled(CoreContainer)`
  /* margin-top: -600px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
`

const Section = props => {
  return (
    <SectionContainer>
      <SectionImage {...props} />
      <Overlay />
      <Container>{props.children}</Container>
    </SectionContainer>
  )
}

export default Section
