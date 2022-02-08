import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const NavWrapper = styled.nav`
  display: flex;
  color: white;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 0 2rem;

  .navbar-logo {
    font-size: 4rem;
    font-weight: 900;
  }

  .nav-burger-menu {
    font-size: 4rem;
  }
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <span className="navbar-logo">MVCTB</span>
      <GiHamburgerMenu className="nav-burger-menu" />
    </NavWrapper>
  );
};

export default Navbar;
