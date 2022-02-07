import React from "react";
import styled from "styled-components";

let StyledSearchBar = styled.input`
  height: 1.5rem;
  min-width: 200px;
  margin: 1rem 1rem;
`;

const SearchBar = () => {
  return <StyledSearchBar placeholder="Search a Character" />;
};

export default SearchBar;
