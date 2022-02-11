import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const StyledCharacterCard = styled.div`
  position: relative;
  height: 130px;
  width: 130px;
  color: white;
  border-radius: 2px;
  border: 2px white solid;
  margin: 2rem;

  span + span {
    display: flex;
    color: black;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 101%;
    background: white;
  }
`;

const CharacterCard = () => {
  return (
    <StyledCharacterCard>
      <span class="character-card-name">Character Name</span>
      <span class="character-card-assist">
        Assist Name<FaPlus></FaPlus>
      </span>
    </StyledCharacterCard>
  );
};

export default CharacterCard;
