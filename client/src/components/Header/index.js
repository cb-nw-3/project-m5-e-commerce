import React from "react";
import styled from "styled-components";

import StoreLogo from "./StoreLogo";
import NavBar from "./NavBar";

const logo = require("../assets/logo.jpg");
const Header = () => {
  return (
    <Wrapper>
      <StoreLogo imgSrc={logo} />
      <NavBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Temporary styles */
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  /* border: solid 2pt red; */
  height: 20vh;
`;

export default Header;
