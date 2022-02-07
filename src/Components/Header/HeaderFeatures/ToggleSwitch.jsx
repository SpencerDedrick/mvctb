import React from "react";
import styled from "styled-components";

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  /* toggle circle container/background */
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
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  /* toggle circle container/background when checked */
  input:checked + .slider {
    background-color: white;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #red;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const ToggleSwitch = () => {
  return (
    <StyledToggle className="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </StyledToggle>
  );
};

export default ToggleSwitch;
