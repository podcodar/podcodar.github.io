import styled from "styled-components"

import { colors } from "helpers/theme"

export const HeaderStyled = styled.header`
  background: ${colors.white};
  margin-bottom: 2em;
`

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2em 1em;
`

export const RightSide = styled.div`
  display: flex;
  float: right;
  padding: 1em 0;
`
