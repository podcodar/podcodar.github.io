import { Layout, Typography } from 'antd';
import { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <>
      <Layout.Footer>
        <Typography.Paragraph style={{ textAlign: 'center' }}>
          Feito com ☕️ e 💚 by <strong>PodCodar</strong>
        </Typography.Paragraph>
      </Layout.Footer>
    </>
  );
}
