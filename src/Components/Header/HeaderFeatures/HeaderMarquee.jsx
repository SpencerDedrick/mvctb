import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const StyledMarquee = styled.div`
  font-size: 4.8rem;
  text-transform: uppercase;
  color: white;
  font-weight: 900;

  span {
    margin: 0 0.8rem;
  }
`;
function HeaderMarquee() {
  return (
    <Marquee gradient={false} speed={100}>
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
