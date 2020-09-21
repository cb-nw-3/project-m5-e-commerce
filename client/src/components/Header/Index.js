// Libraries
import React from "react";

// Styles
import styled from "styled-components";
import { THEME } from "../Style/Theme";
import MenuIcon from "@material-ui/icons/Menu";

// Components
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const Header = () => {
  return (
    <Wrapper>
      <Top>
        <NavDropdown>
          <MenuIcon style={{ color: "black" }} />
          <NavDropdownDiv className="NavDropdownDiv">
            <NavDropdownList>
              <NavDropdownListLi>
                <a href="#news">News</a>
              </NavDropdownListLi>
              <NavDropdownListLi>
                <a href="#contact">Contact</a>
              </NavDropdownListLi>
              <NavDropdownListLi>
                <a href="#about">About</a>
              </NavDropdownListLi>
            </NavDropdownList>
          </NavDropdownDiv>
        </NavDropdown>
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

const NavDropdownListLi = styled.li`
  @media (min-width: ${THEME.mobile}) {
    padding: 20px;
    color: #fff;
    text-decoration: none;
    position: relative;
    display: inline-block;
  }
`;

const NavDropdownList = styled.ul`
  @media (min-width: ${THEME.mobile}) {
    padding: 20px;
    color: #fff;
    text-decoration: none;
    position: relative;
    display: inline-block;
  }

  @media (max-width: ${THEME.mobile}) {
    display: none;
  }
`;

const NavDropdownDiv = styled.div`
  display: none;
`;

const NavDropdown = styled.span`
  @media (min-width: ${THEME.mobile}) {
    display: none;
  }

  @media (max-width: ${THEME.mobile}) {
    padding: 20px;
    color: #fff;
    text-decoration: none;
    position: relative;
    display: inline-block;

    /* &:hover > .NavDropdownDiv {
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #03a9f4;
    } */
  }
`;

const NavMobile = styled.div`
  @media (min-width: ${THEME.mobile}) {
    display: none;
  }

  @media (max-width: ${THEME.mobile}) {
    overflow: hidden;
    background-color: red;
    position: relative;
  }
`;

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
  padding: 30px 50px 30px 50px;

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
  padding: 30px 50px 30px 50px;

  @media (max-width: ${THEME.mobile}) {
    padding: 0 15px 0 15px;
  }
`;

export default Header;
