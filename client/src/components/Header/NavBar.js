import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    // This is temporary filler
    <Wrapper>
      <NavBarItem>link1</NavBarItem>
      <NavBarItem>link2</NavBarItem>
      <NavBarItem>link3</NavBarItem>
      <NavBarItem>About Us</NavBarItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

`

const NavBarItem = styled(Link)`
  margin: 0 20pt;
`

export default NavBar;