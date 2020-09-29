import React from "react";
import styled from "styled-components";

import StoreLogo from "./StoreLogo";
import NavBar from "./NavBar";
import SearchInputs from "./SearchInputs";

const logo2 = require("../assets/bagel.gif");

const Header = () => {
  return (
    <Wrapper>
      <StoreLogo imgSrc={logo2} />
      <NavPages>
        <SearchInputs />
        <NavBar />
      </NavPages>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
`;
const NavPages = styled.div`
  display: flex;
`;

export default Header;
