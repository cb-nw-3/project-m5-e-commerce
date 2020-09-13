import React, { Component } from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    // This is temporary filler
    <Wrapper>
      <NavBarItem>link1</NavBarItem>
      <NavBarItem>link2</NavBarItem>
      <NavBarItem>link3</NavBarItem>
      <NavBarItem>link4</NavBarItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

`

const NavBarItem = styled.p`
  margin: 0 20pt;
`

export default NavBar;