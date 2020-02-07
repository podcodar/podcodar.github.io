import styled from "styled-components"

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2em 1em;
  text-align: ${({ center }) => center && "center"};
`

export default Container
