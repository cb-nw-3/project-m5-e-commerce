import React from "react";

import styled from "styled-components";
import { keyframes } from "styled-components";

const LoadingIcon = () => {
  return (
    <>
      <RotatingImage src={require(`../assets/bagel1.png`)} />
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
  width: 100px;
  height: 100px;
  animation: ${RotatingAnimation} 1.5s infinite linear;
  margin: 100px auto;
`;

export default LoadingIcon;
