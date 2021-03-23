import { ReactElement } from 'react';
import styled from 'styled-components';

import Footer from '#/components/Footer';
import TopMenu from '#/components/TopMenu';

const AppLayoutContainer = styled.div`
  min-height: 100vh;
`;

interface LandingPageLayoutProps {
  children: ReactElement | ReactElement[];
}

export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps): ReactElement {
  return (
    <AppLayoutContainer>
      <TopMenu />

      {children}

      <Footer />
    </AppLayoutContainer>
  );
}
