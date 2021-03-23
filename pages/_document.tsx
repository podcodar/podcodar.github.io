import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

import seoConfig from '#/config/seo.json';

const siteMetadata = (
  <>
    <link rel="shortcut icon" href={seoConfig.faviconPath} />
    <title>{seoConfig.title}</title>
  </>
);

export default class CustomDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          {siteMetadata}
          {/* TODO: Ideally we should load this font from our local assets to decrease latency */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
