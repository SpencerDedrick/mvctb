import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const NavWrapper = styled.nav`
  display: flex;
  color: white;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

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
