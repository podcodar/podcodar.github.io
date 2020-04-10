import styled from "styled-components"

import { colors } from "helpers/theme"

export const Container = styled.a`
  color: ${colors.black};
  text-decoration: none;

  & > img {
    width: 100%;
    height: 180px;
    margin-bottom: -5px;
    /* filter: blur(1px); */
  }
`

export const Content = styled.div`
  padding: 1em;
  background-color: ${colors.black}22;

  & > h6 {
    margin: 0;
    color: ${colors.black}44;
  }
`
