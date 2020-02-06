import React from "react"

import LogoWhite from "images/assets/logo-white.svg"
import LogoBlack from "images/assets/logo-black.svg"
import LogoCleanWhite from "images/assets/logo-clean-white.svg"
import LogoCleanBlack from "images/assets/logo-clean-black.svg"
import { useImages } from "hooks/images"

import { LogoContainer, Image } from "./styled"

const Logo = ({ darkMode, small, ...props }) => {
  const LogoIcon = darkMode ? LogoWhite : LogoBlack
  const LogoClean = darkMode ? LogoCleanWhite : LogoCleanBlack
  const logoText = `logo-text-${darkMode ? "white" : "black"}`

  const { getImage } = useImages()
  const logoImage = getImage(logoText)

  if (small) return <LogoClean />

  return (
    <LogoContainer>
      <LogoIcon height={120} width={120} />
      <Image fluid={logoImage.fluid} />
    </LogoContainer>
  )
}

Logo.defaultProps = {
  darkMode: false,
}

export default Logo
