import React from "react"
import LogoWhite from "images/assets/logo-white.svg"
import LogoBlack from "images/assets/logo-black.svg"
import LogoCleanWhite from "images/assets/logo-clean-white.svg"
import LogoCleanBlack from "images/assets/logo-clean-black.svg"
import LogoTextWhite from "images/assets/logo-text-white.svg"
import LogoTextBlack from "images/assets/logo-text-black.svg"

import { LogoContainer } from "./styled"

const Logo = ({ darkMode, small, ...props }) => {
  const LogoIcon = darkMode ? LogoWhite : LogoBlack
  const LogoText = darkMode ? LogoTextWhite : LogoTextBlack
  const LogoClean = darkMode ? LogoCleanWhite : LogoCleanBlack

  if (small) return <LogoClean />

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
