import { Typography } from 'antd';
import { ReactElement } from 'react';

import seoConfig from '#/config/seo.json';

const { Title } = Typography;

export default function HomeSection(): ReactElement {
  return (
    <div className="home-section">
      <div className="container">
        <Title>{seoConfig.homeMainMessage}</Title>
        <Title level={3}>{seoConfig.homeSecondaryMessage}</Title>
      </div>
    </div>
  );
}
