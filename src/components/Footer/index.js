import React from "react"

import { Container } from "./styled"

const Header = ({ siteTitle }) => {
  const loveIcon = (
    <span role="img" aria-label="love">
      ❤️
    </span>
  )
  return <Container>Made with {loveIcon} by PodCodar</Container>
}

export default Header
