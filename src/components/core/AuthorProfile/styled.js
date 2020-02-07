import styled from "styled-components"

import { colors } from "helpers/theme"

export const Author = styled.h5`
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
