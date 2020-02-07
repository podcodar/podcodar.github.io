import styled from "styled-components"

const getGap = props => props.gap || "0px"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${getGap} ${getGap};

  @media screen and (max-width: 600px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

Grid.Item = styled.div``

export default Grid
