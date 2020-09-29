import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    // This is temporary filler
    <Wrapper>
      <NavBarItem to={"/aboutus"}>Who? Bagelz!</NavBarItem>
      <NavBarItem to={"/fashion"}>Merch</NavBarItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;
const NavBarItem = styled(Link)`
  margin: 0 50px;
  font-family: "Montserrat", sans-serif;
`;

export default NavBar;
