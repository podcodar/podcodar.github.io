import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import { device } from './devices';

export const colors = {
  textColor: '#00000',
};

export const GlobalStyles = createGlobalStyle`
  ${reset}

  // Setting Roboto font
  body {
    font-family: Roboto;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 960px;

  // for screens with more than 1920px, change max width
  @media ${device.desktop} {
    max-width: 1440px;
  }
`;

export const Grid = styled.div<{ cols: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  gap: 1rem;
  align-self: start;
  > * {
    min-width: 0;
  }
`;

export const Cell = styled.div<{ span?: number }>`
  grid-column: span ${(props) => props.span ?? 1};
`;
