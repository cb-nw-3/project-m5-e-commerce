import React from "react";

import styled from "styled-components";
import { keyframes } from "styled-components";

const LoadingIcon = (props) => {
  return (
    <>
      <RotatingImage src={require(`../assets/bagel1.png`)} style={{width: `${props.size}px`, height: `${props.size}px`}} />
    </>
  );
};

const RotatingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const RotatingImage = styled.img`
  animation: ${RotatingAnimation} 1.5s infinite linear;
  margin: 0 auto;
`;

export default LoadingIcon;
