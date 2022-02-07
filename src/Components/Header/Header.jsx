import React from "react";
import styled from "styled-components";

// Imported components
import Navbar from "./HeaderFeatures/Navbar";
import HeaderMarquee from "./HeaderFeatures/HeaderMarquee";
import SearchBar from "./HeaderFeatures/SearchBar";
import ToggleSwitch from "./HeaderFeatures/ToggleSwitch";

const StyledHeader = styled.header``;

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <HeaderMarquee />
      <SearchBar />
      <ToggleSwitch />
    </StyledHeader>
  );
};

export default Header;
