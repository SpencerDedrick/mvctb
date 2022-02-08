import React from "react";
import styled from "styled-components";

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  -webkit-tap-highlight-color: transparent;

  input {
    opacity: 0;
    width: 10;
    height: 10;
  }
  /* toggle switch/slider container/background */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: none;
    border: 2px solid white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  /* toggle circle */
  .slider:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  /* toggle circle container/background when checked */
  input:checked + .slider {
    background-color: #ff3a3a;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .slider + span {
    color: white;
    position: absolute;
    bottom: -20px;
    left: 12px;
    font-size: 1.2rem;
  }
`;

const ToggleSwitch = () => {
  return (
    <StyledToggle className="switch">
      <input className="inputToggle" type="checkbox" />
      <span class="slider round"></span>
      <span>RATIO</span>
    </StyledToggle>
  );
};

export default ToggleSwitch;
