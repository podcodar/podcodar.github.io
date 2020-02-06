import styled from "styled-components"
import { colors } from "helpers/theme"

const Section = styled.section`
  height: ${props => `${props.size}px` || "90vh"};
  width: 100%;
  background-color: ${colors.secondary};
`

export default Section
