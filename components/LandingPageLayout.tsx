import { Layout } from 'antd'
import { ReactNode } from 'react'
import Footer from '#/components/Footer';
import TopMenu from '#/components/TopMenu';

interface LandingPageLayoutProps {
  children: ReactNode;
}
const { Content } = Layout;

export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TopMenu />

      <Content>
        {children}
      </Content>

      <Footer />
    </Layout>
  )
}
