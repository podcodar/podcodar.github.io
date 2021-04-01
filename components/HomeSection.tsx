import { ReactElement } from 'react';
import styled from 'styled-components';

import { device } from './shared/devices';
import { Cell, colors, Container, Grid } from './shared/styled';

import seoConfig from '#/config/seo.json';

const HomeSectionContainer = styled.div`
  padding: 10rem 0;
  text-align: center;

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

    // large fone or upper
    @media ${device.mobileL} {
      text-align: left;
    }
  }

  img {
    width: 100%;
  }
`;

const HomeInfo = styled(Cell)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function HomeSection(): ReactElement {
  return (
    <HomeSectionContainer>
      <Container>
        <Grid cols={2} sm={1}>
          <HomeInfo>
            <h1>{seoConfig.homeMainMessage}</h1>
            <h2>{seoConfig.homeSecondaryMessage}</h2>
          </HomeInfo>
          <Cell>
            <img src="images/podcodar-bg.png" alt="PodCodar Background" />
          </Cell>
        </Grid>
      </Container>
    </HomeSectionContainer>
  );
}
