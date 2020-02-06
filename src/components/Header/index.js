import React from "react"

import Logo from "@components/Logo"
import Link from "@components/core/Link"
import Button from "@components/core/Button"
import { HeaderStyled, RightSide, Container } from "./styled"

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <RightSide>
        <Button href="#subscribe">Subscribe</Button>
      </RightSide>
    </Container>
  </HeaderStyled>
)

export default Header
