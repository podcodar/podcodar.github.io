import styled from "styled-components"

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2em 1em;
  text-align: ${({ center }) => center && "center"};

  & blockquote {
    margin: 1em 0;
    padding: 1.45em;
    background-color: #e6cb2533;

    & p {
      color: #999;
    }

    & a {
      color: #A380CE;
    }
  }
`

export default Container
