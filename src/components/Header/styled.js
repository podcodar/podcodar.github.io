import styled from "styled-components"
import CoreContainer from "@components/core/Container"

import { colors } from "helpers/theme"

export const HeaderStyled = styled.header`
  background: ${colors.white};
`

export const RightSide = styled.div`
  padding: 3em 0;
`

export const Container = styled(CoreContainer)`
  display: flex;
  justify-content: space-between;
`
