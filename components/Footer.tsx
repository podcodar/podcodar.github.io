import { ReactElement } from 'react';

import { FooterContainer } from './shared/styled';

export default function Footer(): ReactElement {
  return (
    <FooterContainer>
      <p>
        Feito com ☕️ e 💚 by <strong>PodCodar</strong>
      </p>
    </FooterContainer>
  );
}
