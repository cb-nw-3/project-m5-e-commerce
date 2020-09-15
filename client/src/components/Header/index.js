import React from "react";
import styled from "styled-components";

import StoreLogo from "./StoreLogo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Wrapper>
      <StoreLogo />
      <NavBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Temporary styles */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: solid 2pt red;
  height: 20vh;
`;

export default Header;
