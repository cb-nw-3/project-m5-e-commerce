import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    // This is temporary filler
    <Wrapper>
      <NavBarItem to={"/"}>Our Favorites</NavBarItem>
      <NavBarItem to={"/"}>Just for Kidz</NavBarItem>
      <NavBarItem to={"/"}>The Newz</NavBarItem>
      <NavBarItem to={"/AboutUs"}>Why Bagelz</NavBarItem>
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
  margin: 0 20pt;
  font-family: "Montserrat", sans-serif;
`;

export default NavBar;
