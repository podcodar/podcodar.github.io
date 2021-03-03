import { AppProps } from "next/app";
import Head from "next/head";
import seoConfig from "#/config/seo.json"
import LandingPageLayout from "../components/LandingPageLayout";

import 'antd/dist/antd.css';

function AppLayout({ Component, pageProps }: AppProps) {
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

export default AppLayout
