import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
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
