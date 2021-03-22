import { Layout } from 'antd';
import { ReactElement } from 'react';

import Footer from '#/components/Footer';
import TopMenu from '#/components/TopMenu';

interface LandingPageLayoutProps {
  children: ReactElement | ReactElement[];
}
const { Content } = Layout;

export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps): ReactElement {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TopMenu />

      <Content>{children}</Content>

      <Footer />
    </Layout>
  );
}
