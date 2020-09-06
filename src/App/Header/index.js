import PropTypes from "prop-types"
import React from "react"

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as LogoMobile } from "../../assets/images/logo.svg";
import Button from '../../shared/button'

import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  @media(max-width: 1380px) {
    padding: 0 50px;
  }
  @media(max-width: 480px) {
    padding: 0 18px;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--max-width);
  height: 63px;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 860px) {
    overflow: hidden;
    height: 0px;
    width: 0px;
  }
`;

export const MobileMenu = styled.div`
  overflow: hidden;
  height: 0px;
  width: 0px;
  flex-direction: column;
  max-width: var(--max-width);
  align-items: center;
  justify-content: space-around;
  @media(max-width: 860px) {
    width: 100%;
    height: 105px;
  }
`;

export const A = styled.a`
  color: var(--font-primary-color);
`;

export const Wrapper = styled.nav`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 860px) {
    width: 100%;
    justify-content: space-between;
    margin-top: 15px;
  }
`;

const Header = () => (
  <header>
    <Nav>
      <MobileMenu className="wrapper-limit">
        <Wrapper>
          <LogoMobile></LogoMobile>
          <Button>Comprar</Button>
        </Wrapper>
        <Wrapper>
          <A href="#who-we-are">Quem somos</A>
          <A href="#products">Produtos</A>
          <A href="#collections">Coleções</A>
        </Wrapper>
      </MobileMenu>
      <Menu className="wrapper-limit">
        <Wrapper>
          <Logo></Logo>
        </Wrapper>
        <Wrapper>
          <A href="#who-we-are">Quem somos</A>
          <A href="#products">Produtos</A>
          <A href="#collections">Coleções</A>
          <Button>Comprar</Button>
        </Wrapper>
      </Menu>
    </Nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
