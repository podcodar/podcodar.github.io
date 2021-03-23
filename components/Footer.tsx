import { ReactElement } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  & > p {
    text-align: center;
  }
`;

export default function Footer(): ReactElement {
  return (
    <FooterContainer>
      <p>
        Feito com ☕️ e 💚 by <strong>PodCodar</strong>
      </p>
    </FooterContainer>
  );
}
