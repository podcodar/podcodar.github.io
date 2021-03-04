import React from 'react'

import seoConfig from "#/config/seo.json"
import { Typography } from 'antd'

const { Title } = Typography

export default function HomeSection() {
  return (
    <div className="home-section">
      <div className="container">
        <Title>{seoConfig.homeMainMessage}</Title>
        <Title level={3}>{seoConfig.homeSecondaryMessage}</Title>
      </div>
    </div>
  )
}
