import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const StyledMarquee = styled.div`
  font-size: 48px;
  text-transform: uppercase;
  color: white;

  span {
    margin: 0 10px;
  }
`;
function HeaderMarquee() {
  return (
    <Marquee gradient={false} speed={70}>
      <StyledMarquee>
        <span>Select</span>
        <span>Your</span>
        <span>Heroes</span>
      </StyledMarquee>
    </Marquee>
  );
}

export default HeaderMarquee;
