import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';

import LandingPageLayout from '../components/LandingPageLayout';

import seoConfig from '#/config/seo.json';

import '#/components/styles.sass';
import 'antd/dist/antd.css';

function AppLayout({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
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
