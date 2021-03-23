import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';

import LandingPageLayout from '../components/LandingPageLayout';

import { GlobalStyles } from '#/components/shared/styled';
import seoConfig from '#/config/seo.json';

function AppLayout({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GlobalStyles />
      <Head>
        <link rel="shortcut icon" href={seoConfig.faviconPath} />
        <title>{seoConfig.title}</title>
      </Head>
      <LandingPageLayout>
        <Component {...pageProps} />
      </LandingPageLayout>
    </>
  );
}

export default AppLayout;
