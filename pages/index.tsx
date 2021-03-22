import { ReactElement } from 'react';

import HomeSection from '#/components/HomeSection';

const IndexPage = (): ReactElement => (
  <>
  <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto;
  }

  * {
    box-sizing: border-box;
  }
`}</style>
    <HomeSection />
  </>
);

export default IndexPage;
