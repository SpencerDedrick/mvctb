import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border-radius: 5px;
  border: 2px solid white;
  color: white;
  padding: 0.5rem 1.8rem;
  font-size: 14px;
  font-weight: bold;
`;

const Button = () => {
  return <StyledButton>+ Random Character</StyledButton>;
};

export default Button;
