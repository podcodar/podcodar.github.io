import styled from "styled-components"
import { colors } from "helpers/theme"

const Button = styled.a`
  padding: 0.8em 1.5em;
  color: ${colors.white};
  background-color: ${colors.primary};
  font-size: 16px;
  border-radius: 30px;
  text-decoration: none;
  text-transform: uppercase;
`

export default Button
