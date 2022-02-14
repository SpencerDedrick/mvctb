import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const StyledCharacterCard = styled.div`
  position: relative;
  height: 130px;
  width: 30%;
  color: white;
  border-radius: 2px;
  border: 2px white solid;
  background: blue;
  font-size: 1.4rem;
  background-image: url("https://static.wikia.nocookie.net/marvelvscapcom/images/a/a5/Mvc2-cyclops.jpg/revision/latest/scale-to-width-down/500?cb=20080205042843");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

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
      <span class="character-card-name">Character Name</span>
      <span class="character-card-assist">
        Assist Name<FaPlus></FaPlus>
      </span>
    </StyledCharacterCard>
  );
};

export default CharacterCard;
