// Libraries
import React from "react";

// Styles
import styled from "styled-components";
import { THEME } from "../Style/Theme";

const Logo = () => {
  return <Wrapper>ecX</Wrapper>;
};

const Wrapper = styled.section`
  color: BLACK;
  font-size: 3rem;
  padding: 30px;

  @media (max-width: ${THEME.mobile}) {
    font-size: 2rem;
    padding: 10px;
  }
`;

export default Logo;
