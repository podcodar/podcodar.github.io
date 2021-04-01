import { ReactElement } from 'react';
import styled from 'styled-components';

import { colors, Container } from './shared/styled';

import seoConfig from '#/config/seo.json';

const HomeSectionContainer = styled.div`
  padding: 30vh 0;
  min-height: 100%;

  & > div {
    display: block;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1rem;
  }

  h1,
  h2 {
    color: ${colors.textColor};
    padding: 1rem 0;
  }
`;

export default function HomeSection(): ReactElement {
  return (
    <HomeSectionContainer>
      <Container>
        <h1>{seoConfig.homeMainMessage}</h1>
        <h2>{seoConfig.homeSecondaryMessage}</h2>
      </Container>
    </HomeSectionContainer>
  );
}

// const Conta
