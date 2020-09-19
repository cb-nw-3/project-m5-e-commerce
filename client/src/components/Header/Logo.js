// Libraries
import React from "react";

// Styles
import styled from "styled-components";

const Logo = () => {
  return <Wrapper href="/">ecX</Wrapper>;
};

const Wrapper = styled.a`
  color: BLACK;
  font-size: 3rem;
  padding: 30px;
  text-decoration: none;
`;

export default Logo;
