import styled from "styled-components"

import { colors } from "helpers/theme"

export const Container = styled.a`
  color: ${colors.black};
  text-decoration: none;

  & > img {
    width: 100%;
    max-height: 200px;
    margin-bottom: -5px;
    filter: blur(1px);
  }
`

export const Content = styled.div`
  padding: 1em;
  background-color: ${colors.black}22;
`

export const Author = styled.h6`
  display: flex;
  color: ${colors.black};
  margin-bottom: unset;
  margin-top: 2em;

  & > img {
    height: 2em;
    width: 2em;
    border-radius: 50%;
  }

  & > span {
    padding: 0.5em;
  }
`