import styled from "styled-components"
import CoreContainer from "@components/core/Container"

import { colors } from "helpers/theme"

export const HeaderStyled = styled.header`
  background: ${colors.white};
`

export const RightSide = styled.div`
  padding: 3em 0;

  @media screen and (max-width: 600px) {
    & {
      padding: 3em 1em;
    }
  }
`

export const Container = styled(CoreContainer)`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    & {
      display: unset;

      & a {
        width: 100%;
        display: block;
      }
    }
  }
`
