import React from "react";
import styled from "styled-components";

// Imported components
import Navbar from "./HeaderFeatures/Navbar";
import HeaderMarquee from "./HeaderFeatures/HeaderMarquee";
import SearchBar from "./HeaderFeatures/SearchBar";
import ToggleSwitch from "./HeaderFeatures/ToggleSwitch";

const StyledHeader = styled.header`
  .searchbar-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
  }

  .header-instructions {
    margin: 1rem;
    color: white;
    display: inline-block;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <HeaderMarquee />
      <div className="searchbar-container">
        <SearchBar />
        <ToggleSwitch />
      </div>
      <span className="header-instructions">
        Ratio instructions: Choose characters and build a team that costs 7
        points or less.
      </span>
    </StyledHeader>
  );
};

export default Header;
