import styled from "styled-components"
import Img from "gatsby-image"

import { colors } from "helpers/theme"

export const Container = styled.a`
  color: ${colors.white};
  text-decoration: none;
`
export const Title = styled.h1`
  font-size: 4em;
`

export const SubTitle = styled.h5`
  font-size: 1em;
  color: ${colors.white}99;
  margin-bottom: 4em;
`

export const Episode = styled.h6`
  color: ${colors.white};
`

export const Image = styled(Img)`
  right: 0;
  overflow: hidden;
  width: 120px;
  bottom: -100px;
  position: absolute !important;
  opacity: 0.6;
`
