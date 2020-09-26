// Libraries
import React from "react";

// Styles
import styled from "styled-components";
import { THEME } from "../Style/Theme";

// Components
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";
import Logo from "./Logo";


const Header = () => {
  return (
    <Wrapper>
      <Top>
        {/* <NavDropdown /> */}
        <Logo />
        <SearchBarDesktop>
          <SearchBar />
        </SearchBarDesktop>
        <CartIcon />
      </Top>
      <Bottom>
        <SearchBarMobile>
          <SearchBar />
        </SearchBarMobile>
      </Bottom>
    </Wrapper>
  );
};

const SearchBarDesktop = styled.div`
  @media (max-width: ${THEME.mobile}) {
    display: none;
  }
`;

const SearchBarMobile = styled.div`
  @media (min-width: ${THEME.mobile}) {
    display: none;
  }
`;

const Bottom = styled.section`
  align-items: center;
  color: BLACK;
  padding: 10px;

  @media (min-width: ${THEME.mobile}) {
    display: none;
    width: 100%;
  }
`;

const Top = styled.section`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: BLACK;
  padding: 10px;

  @media (max-width: ${THEME.mobile}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 15px;
  }
`;

const Wrapper = styled.section`
  color: BLACK;
  padding: 10px;

  @media (max-width: ${THEME.mobile}) {
    padding: 0 15px 0 15px;
  }
`;

export default Header;
