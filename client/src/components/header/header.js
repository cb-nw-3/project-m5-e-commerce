import React from "react";
import styled from "styled-components";

// This is the full logo with text
import logo from "../../public/WE_LOGO.png";
// This is the IMG portion of logo only

const Header = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 100;
  transition: height 0.5ms;
`;

const Logo = styled.img`
  height: 150px;
  width: 150px;
`;
