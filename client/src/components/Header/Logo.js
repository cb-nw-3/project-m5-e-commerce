// Libraries
import React from "react";

// Styles
import styled from "styled-components";
import { THEME } from "../Style/Theme";
import logo from '../../assets/logo.png';


const Logo = () => {
  return (
    <Wrapper href="/">
      <Imagesrc src={logo} />
    </Wrapper>
  )
};

const Wrapper = styled.a`
  color: BLACK;

  @media (max-width: ${THEME.mobile}) {
    padding: 0 15px;
  }
  text-decoration: none;
`;

const Imagesrc = styled.img`
  width: 180px;
`

export default Logo;
