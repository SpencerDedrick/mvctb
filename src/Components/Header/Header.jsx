import React from "react";
import styled from "styled-components";

// Imported components
import Navbar from "./Navbar";

const StyledHeader = styled.header``;

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
