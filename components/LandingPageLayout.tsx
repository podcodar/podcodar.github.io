import { Layout, Menu } from 'antd'
import { ReactNode } from 'react'
import Image from 'next/image'

interface LandingPageLayoutProps {
  children: ReactNode;
}
const { Header, Content, Footer } = Layout;

export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex' }}>
        <div style={{ flex: 1 }} >
          <Image
            src="/images/logo-with-name.png"
            alt="Picture of the author"
            width={120}
            height={60}
          />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Como funciona?</Menu.Item>
          <Menu.Item key="3">Faça Parte!</Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: '0 50px' }}>
        {children}
      </Content>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}
