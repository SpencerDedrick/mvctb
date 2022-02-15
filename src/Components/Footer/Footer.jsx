import React from "react";
import styled from "styled-components";

const StyledFooter = styled.section`
  width: 100%;
  height: 10rem;
  margin: 3rem auto;

  ul {
    display: flex;

    color: white;
    justify-content: space-around;
    font-size: 1.4rem;
    list-style-type: none;
    padding: 0;
  }

  h2 {
    color: white;
    font-size: 4rem;
    font-weight: 900;
    text-align: center;
    margin: 1rem;
    margin-bottom: 2rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div>
        <ul>
          <li>Team Builder</li>
          <li>About</li>
          <li>Feedback</li>
          <li>Contact</li>
        </ul>
      </div>
      <h2>MVCTB</h2>
    </StyledFooter>
  );
}

export default Footer;
