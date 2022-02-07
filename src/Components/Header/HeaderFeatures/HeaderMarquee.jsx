import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const StyledMarquee = styled.div`
  font-size: 3rem;
  text-transform: uppercase;
  color: white;
  margin-bottom: 1rem;

  span {
    margin: 0 1rem;
  }
`;
function HeaderMarquee() {
  return (
    <Marquee gradient={false} speed={90}>
      <StyledMarquee>
        <span />
        <span>Select</span>
        <span>Your</span>
        <span>Heroes</span>
      </StyledMarquee>
    </Marquee>
  );
}

export default HeaderMarquee;
