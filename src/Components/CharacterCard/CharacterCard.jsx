import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const StyledCharacterCard = styled.div`
  position: relative;
  height: 130px;
  max-width: 30%;
  min-width: 110px;
  color: white;
  border-radius: 2px;
  border: 2px white solid;
  font-size: 1.2rem;

  &::before {
    position: absolute;
    content: "";
    z-index: -1;
    top: 18px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% - 18px);
    background-image: url("https://tiermaker.com/images/chart/chart/mvc2-coolest-character-tier-list-269223/b29348a725fc4b6f202ac5b671fa05c2-650-80jpg.png");
    background-position: center;
    background-position-y: 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
  * {
    box-sizing: border-box;
  }

  .character-card-name {
    color: black;
    position: absolute;
    background: white;
    width: calc(100% + 3px);
    display: flex;
    top: -2px;
    left: -1px;
    padding: 0.25rem 0.75rem;
  }
  .character-card-assist {
    display: flex;
    color: black;
    position: absolute;
    bottom: -1px;
    left: -1px;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0.75rem;
    background: white;
    width: calc(100% + 3px);
  }
`;

const CharacterCard = () => {
  return (
    <StyledCharacterCard>
      <span class="character-card-name">Cyclops</span>
      <span class="character-card-assist">
        Assist Name<FaPlus></FaPlus>
      </span>
    </StyledCharacterCard>
  );
};

export default CharacterCard;
