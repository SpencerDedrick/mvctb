import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0.5rem;
`;
const CharacterCardContainer = () => {
  return (
    <StyledCardContainer>
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </StyledCardContainer>
  );
};

export default CharacterCardContainer;
