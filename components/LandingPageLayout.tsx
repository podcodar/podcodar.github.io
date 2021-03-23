import { ReactElement } from 'react';

import Footer from '#/components/Footer';
import TopMenu from '#/components/TopMenu';
import { AppLayoutContainer } from '#/components/shared/styled';

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
