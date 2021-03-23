import { AppProps } from 'next/app';
import { ReactElement } from 'react';

import LandingPageLayout from '../components/LandingPageLayout';

import { GlobalStyles } from '#/components/shared/styled';

function AppLayout({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GlobalStyles />
      <LandingPageLayout>
        <Component {...pageProps} />
      </LandingPageLayout>
    </>
  );
}

export default AppLayout;
