import React from "react";
import styled from "styled-components";

// Imported components
import Navbar from "./Navbar";
import HeaderMarquee from "./Marquee/HeaderMarquee";

const StyledHeader = styled.header``;

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <HeaderMarquee />
    </StyledHeader>
  );
};

export default Header;
