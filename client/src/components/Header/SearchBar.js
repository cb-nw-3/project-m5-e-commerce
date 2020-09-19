// Libraries
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

// Styles
import styled from "styled-components";

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchBarContainer>
        <Form action="/">
          <Input type="text" placeholder="Search.." name="search"></Input>
          <Button type="submit">
            <SearchIcon />
          </Button>
        </Form>
      </SearchBarContainer>
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
`;

const Form = styled.form`
  color: BLACK;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchBarContainer = styled.div`
  color: BLACK;
  width: 100%;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: BLACK;
  padding: 30px 50px 30px 50px;
`;

export default SearchBar;
