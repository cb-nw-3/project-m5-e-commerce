import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

function Header() {
  return (
    <HeaderWrapper>
      <Navbar />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 25vh;
  width: 75vh;
  text-align: center;
  margin: 0 auto;
`;

export default Header;
