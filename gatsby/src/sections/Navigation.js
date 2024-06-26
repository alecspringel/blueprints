import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import Button from '../components/Button';
import ClickAway from '../components/ClickAway';
// Todo: update icons and logo
import DELETEMELOGO from '../images/DELETE-ME.svg';
import HamburgerMenuSVG from '../images/DELETE-ME-HAMBURGER.svg';

const MobileNav = ({ height, isClear }) => {
  const [open, toggle] = useState(false);
  return (
    <ClickAway
      style={{ display: 'inline-block', height: 'fit-content' }}
      onClick={() => toggle(!open)}
      onClickAway={() => toggle(false)}
      contents={(
        <>
          <Wrapper>
            <MenuIcon src={HamburgerMenuSVG} />
            <Options open={open} height={height} isClear={isClear}>
              <ul className="flex-col mw-padding p-t12 p-b12">
                <MobileNavLink to="/#">Home</MobileNavLink>
                <MobileNavLink to="/#about">About</MobileNavLink>
                <MobileNavLink to="/#faq">FAQ</MobileNavLink>
                <MobileNavLink to="/#contact">Contact</MobileNavLink>
              </ul>
            </Options>
          </Wrapper>
        </>
      )}
    />
  );
};

const MenuIcon = styled.img`
  height: 30px;
  vertical-align: middle;
  @media only screen and (max-width: 400px) {
    height: 25px;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  display: none;
  ${MEDIA_QUERY.TABLET} {
    display: block;
  }
`;

const Options = styled.div`
  max-height: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 2;
  background: ${(props) => props.theme.background};
  overflow: hidden;
  transition: max-height 0ms ease-in-out;
  ${(props) => props.open
    && css`
      background: #000000c2;
      transition: max-height 150ms ease-in-out;
      max-height: ${(props) => props.height};
      box-shadow: 2px 3px 3px #00000033;
    `}
`;

const MobileNavLink = styled(Link)`
  font-family: "Aleo";
  color: #fff;
  padding: 10px 5px;
`;

const DesktopNav = () => (
  <ul className="desktop-nav">
    <NavLink to="/#">Home</NavLink>
    <NavLink to="/#about">About</NavLink>
    <NavLink to="/#faq" style={{ paddingRight: 40 }}>FAQ</NavLink>
    <Button small to="/#contact">Contact Us</Button>
  </ul>
);

const Navigation = () => (
  <NavigationBar className="flex-row align-c">
    <NavigationContent className="m-auto flex-row align-c p-t8 p-b8 mw-padding">
      <img src={DELETEMELOGO} alt="Todo: update alt" />
      <MobileNav height="180px" />
      <DesktopNav />
    </NavigationContent>
  </NavigationBar>
);

export default Navigation;

const NavigationBar = styled.nav`
  height: 64px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  ${MEDIA_QUERY.TABLET} {
    .desktop-nav {
      display: none;
    }
  }
`;

const NavigationContent = styled.div`
  max-width: 1440px;
  width: 100%;
  justify-content: space-between;
  position: relative;

  & > img {
    height: 36px;
    margin-right: 12px;
  }

  @media only screen and (max-width: 400px) {
    & > img {
      height: 28px;
    }
  }

  @media only screen and (max-width: 300px) {
    & > img {
      display: none;
    }
  }
`;

const NavLink = styled(Link)`
  font-family: "Aleo";
  color: #fff;
  padding: 0 20px;
`;
