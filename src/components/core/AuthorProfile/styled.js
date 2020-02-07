import styled from "styled-components"

import { colors } from "helpers/theme"

export const Author = styled.div`
  display: flex;
  color: ${colors.black};
  margin-top: 2em;

  margin-bottom: ${props => !props.small && "2em"};

  & > img {
    height: ${props => (!props.small ? "3em" : "1.5em")};
    width: ${props => (!props.small ? "3em" : "1.5em")};
    border-radius: 50%;
  }

  & p,
  & span {
    font-size: 0.8em;
    padding: 0 0.5em;
    margin: unset;
  }
  & span {
    display: ${props => props.small && "none"};
    color: ${colors.black}99;
    margin-bottom: 2em;
  }
`
