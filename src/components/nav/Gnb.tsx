import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Desktop, Mobile, Tablet } from 'hooks/MediaQueries';

import Logo from '../Logo';
import { NavItems } from './NavItems';
import Dropdown from './Dropdown';
import UserMenu from './UserMenu';
import MobileMenu from './MobileMenu';

const Nav = styled.nav`
  display: grid;
  place-items: center;
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 98;
  background-color: ${({ theme }) => theme.colors.white};
  user-select: none;
  padding: 0px 20px;
`;

const InnerNav = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Li = styled.li`
  height: 100%;
  width: 150px;
  display: block;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.1s ease-in-out;
  :hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
`;

const MenuLink = styled(Link)`
  color: ${(props) => props.theme.colors.gray900};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function Gnb() {
  const [open, setOpen] = useState<boolean[]>(
    Array.from({ length: NavItems.length }, () => false),
  );
  const handleHover = (index: number, state: boolean): void => {
    const newOpen = [...open];
    newOpen[index] = state;
    setOpen(newOpen);
  };

  return (
    <>
      <Desktop>
        <UserMenu />
      </Desktop>
      <Nav>
        <InnerNav>
          <Link to="/">
            <Logo />
          </Link>

          <Desktop>
            <Ul>
              {NavItems.map((item) => (
                <Li
                  key={item.id}
                  onMouseOver={() => handleHover(Number(item.id), true)}
                  onMouseLeave={() => handleHover(Number(item.id), false)}
                >
                  <MenuLink to={item.path === '/' ? '#' : item.path}>
                    {item.title}
                  </MenuLink>
                  {item.subPath && open[Number(item.id)] && (
                    <Dropdown path={item.subPath} />
                  )}
                </Li>
              ))}
            </Ul>
          </Desktop>

          <Tablet>
            <MobileMenu />
          </Tablet>

          <Mobile>
            <MobileMenu />
          </Mobile>
        </InnerNav>
      </Nav>
    </>
  );
}

export default Gnb;
