// Libraries
import React from "react";

// Styles
import styled from "styled-components";

// Components
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <SearchBar />
      <CartIcon />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: BLACK;
  padding: 30px 50px 30px 50px;
`;

export default Header;
