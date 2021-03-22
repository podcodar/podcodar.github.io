import { Layout, Menu } from 'antd'
import React from 'react'

const menuItems = [
  { text: "Home", href: '#'},
  { text: "Wiki", href: 'https://github.com/podcodar/wiki/wiki', target: '_blank'},
  { text: "Como Funciona?", href: '#'},
  { text: "Faça Parte!", href: '#'},
]

function Logo() {
  return (
    <img
      src="/images/logo-sem-img.png"
      width={94}
      height={94}
    />
  )
}


export default function TopMenu() {
  return (
    <Layout.Header className="navbar">
      <div className="container">
        <div style={{ flex: 1 }} >
          <Logo />
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          className="navbar-items"
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.text} >
              <a target={item.target || ''} href={item.href} >
                {item.text}
              </a>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </Layout.Header>
  )
}
