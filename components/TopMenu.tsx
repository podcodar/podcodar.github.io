import { Layout, Menu } from 'antd'
import React, { useState } from 'react'

const menuItems = [
  "Home",
  "Como Funciona?",
  "Faça Parte!",
]

function Logo() {
  return (
    <img
      src="/images/logo-with-name.png"
      alt="Picture of the author"
      width={120}
      height={50}
    />
  )
}


export default function TopMenu() {
  const [selectedKey, setSelectedKey] = useState('1')
  const handleClick = (key: string) =>
    () => setSelectedKey(key)
  return (
    <Layout.Header className="navbar">
      <div className="container">
        <div style={{ flex: 1 }} >
          <Logo />
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[selectedKey]}
          className="navbar-items"
        >
          {menuItems.map(item => (
            <Menu.Item key={item} onClick={handleClick(item)} >
              {item}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </Layout.Header>
  )
}
