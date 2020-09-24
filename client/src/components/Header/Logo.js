// Libraries
import React from "react";

// Styles
import styled from "styled-components";
import { THEME } from "../Style/Theme";

const Logo = () => {
  return <Wrapper href="/">ecX</Wrapper>;
};

const Wrapper = styled.a`
  color: BLACK;
  font-size: 3rem;
  padding: 30px;

  @media (max-width: ${THEME.mobile}) {
    font-size: 2rem;
    padding: 15px;
  }
  text-decoration: none;
`;

export default Logo;
