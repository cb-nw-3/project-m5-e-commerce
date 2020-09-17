import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    // This is temporary filler
    <Wrapper>
      <NavBarItem to={'/'}>link1</NavBarItem>
      <NavBarItem to={'/'}>link2</NavBarItem>
      <NavBarItem to={'/'}>link3</NavBarItem>
      <NavBarItem to={'/'}>About Us</NavBarItem>
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