import React from "react";
import styled from "styled-components";

const StyledCharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 2rem 1rem;
  column-gap: 5px;
  row-gap: 9px;

  div {
    border: 2px solid white;
    height: 50px;
  }
`;

let arr = [];
for (let i = 0; i < 56; i++) {
  arr[i] = i;
}

const CharacterGrid = () => {
  return (
    <StyledCharacterGrid>
      {arr.map((x) => {
        return <div>{x}</div>;
      })}
    </StyledCharacterGrid>
  );
};

export default CharacterGrid;
