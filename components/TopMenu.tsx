import { ReactElement } from 'react';
import styled from 'styled-components';

import { colors, Container } from './shared/styled';

const menuItems = [
  { text: 'Home', href: '#' },
  {
    text: 'Wiki',
    href: 'https://github.com/podcodar/wiki/wiki',
    target: '_blank',
  },
  { text: 'Como Funciona?', href: '#' },
  { text: 'Faça Parte!', href: '#' },
];

const NavBarContainer = styled.nav`
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
`;

const LogoContainer = styled.div`
  flex: 1;

  img {
    height: 4rem;
  }
`;

const MenuList = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  padding: 2rem 1rem;
  color: ${colors.textColor};
`;

function Logo() {
  return (
    <LogoContainer>
      <img src="/images/logo-text.png" alt="logo" />
    </LogoContainer>
  );
}

export default function TopMenu(): ReactElement {
  return (
    <NavBarContainer>
      <Container>
        <Logo />

        <MenuList>
          {menuItems.map((item) => (
            <MenuItem key={item.text}>
              <a target={item.target || ''} href={item.href}>
                {item.text}
              </a>
            </MenuItem>
          ))}
        </MenuList>
      </Container>
    </NavBarContainer>
  );
}
