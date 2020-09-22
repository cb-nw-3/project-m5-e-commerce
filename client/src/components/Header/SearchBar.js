// Libraries
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

// Styles
import styled from "styled-components";
import { THEME } from "../Style/Theme";

const SearchBar = () => {
  return (
    <Wrapper>
      <Form action="/">
        <Input type="text" placeholder="Search.." name="search"></Input>
        <Button type="submit">
          <SearchIcon />
        </Button>
      </Form>
    </Wrapper>
  );
};

const Button = styled.button`
  border: none;
  margin-top: 5px;
  background-color: white;
`;

const Input = styled.input`
  width: 500px;
  border: none;
  padding: 15px;

  @media (max-width: ${THEME.mobile}) {
    width: 100%;
    padding: 5px;
  }
`;

const Form = styled.form`
  color: BLACK;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  /* @media (max-width: 873px) {
    width: 100%;
  } */
`;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  color: BLACK;
  padding: 5px;

  @media (max-width: ${THEME.mobile}) {
    display: flex;
    flex-direction: column;
    color: BLACK;
    background-color: white;
    padding: 10px;
    width: 100%;
  }
`;

export default SearchBar;
