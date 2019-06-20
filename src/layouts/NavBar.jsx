import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: flex-start;
  margin-right: auto;
`;

const Nav = styled.nav`
    background-color: rgba(255,255,255,.05);
    box-shadow: ${props => props.theme.shadow.card};
    margin: 0;
    padding: 1rem 1.5rem;
    height: 100%;
    max-height: 64px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.4rem;
  align-items: center;
  text-align: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 3rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.red.base};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <Nav>
      <StyledLink to="/">Daniel Balloch</StyledLink>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
