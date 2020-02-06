import styled from "styled-components"

const getGap = props => props.gap || "0px"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: ${getGap} ${getGap};
`

Grid.Item = styled.div``

export default Grid
