import React from "react"

import Logo from "@components/Logo"
import Link from "@components/core/Link"
import { Container, HeaderStyled } from "./styled"

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <Container>
      <Link to="/">
        <Logo />
      </Link>
    </Container>
  </HeaderStyled>
)

export default Header
