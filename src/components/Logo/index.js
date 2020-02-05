import React from "react"
import LogoCleanWhite from "images/assets/logo-black.svg"
import LogoCleanBlack from "images/assets/logo-white.svg"
import LogoTextWhite from "images/assets/logo-text-black.svg"
import LogoTextBlack from "images/assets/logo-text-white.svg"

import { LogoContainer } from "./styled"

const Logo = ({ darkMode, ...props }) => {
  const LogoIcon = darkMode ? LogoCleanWhite : LogoCleanBlack
  const LogoText = darkMode ? LogoTextWhite : LogoTextBlack

  return (
    <LogoContainer>
      <LogoIcon height={80} width={80} />
      <LogoText height={80} width={200} />
    </LogoContainer>
  )
}

Logo.defaultProps = {
  darkMode: false,
}

export default Logo
