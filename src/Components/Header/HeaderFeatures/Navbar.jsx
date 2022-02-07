import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const NavWrapper = styled.nav`
  display: flex;
  color: white;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem 0 1.5rem;

  .navbar-logo {
    font-size: 24px;
    font-weight: 900;
  }

  .nav-burger-menu {
    font-size: 40px;
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
