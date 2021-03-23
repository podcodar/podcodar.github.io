import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import { device } from './devices';

export const colors = {
  textColor: '#dddddd',
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
  max-width: 960px;

  // for screens with more than 1920px, change max width
  @media ${device.desktop} {
    max-width: 1440px;
  }
`;

export const AppLayoutContainer = styled.div`
  min-height: 100vh;
`;

export const FooterContainer = styled.div`
  & > p {
    text-align: center;
  }
`;
