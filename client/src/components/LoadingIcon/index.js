import React from "react";

import styled from "styled-components";
import { keyframes } from "styled-components";

const LoadingIcon = () => {
  let firstRandomBagel = Math.floor(Math.random() * 3) + 1;
  let secondRandomBagel = Math.floor(Math.random() * 3) + 1;
  return (
    <>
      <RotatingImage src={require(`../assets/bagel${firstRandomBagel}.png`)} />
      <RotatingImage src={require(`../assets/bagel${secondRandomBagel}.png`)} />
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
  margin: 0 auto;
`;

export default LoadingIcon;
