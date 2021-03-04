import { Layout, Typography } from 'antd'
import React from 'react'

export default function Footer() {
  return (
    <>
      <Layout.Footer>
        <Typography.Paragraph  style={{ textAlign: 'center' }}>
          Feito com ☕️  e 💚 by <strong>PodCodar</strong>
        </Typography.Paragraph>
      </Layout.Footer>
    </>
  )
}
