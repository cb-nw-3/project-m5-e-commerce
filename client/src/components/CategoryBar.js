import React from "react";
import styled from "styled-components";

const CategoryBar = ({ categories }) => {
  return (
    <Container>
      {categories.map((category) => {
        return <StyledButton>{category}</StyledButton>;
      })}
    </Container>
  );
};

export default CategoryBar;

const StyledButton = styled.button`
  display: flex;
  flex: 0 1 1;
  flex-grow: 1;
  word-break: keep-all;
  border: none;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  border-right: 1px solid rgba(160, 101, 65, 0.1);
  padding: 10px 0;
  background: transparent;

  &:hover {
    cursor: pointer;
    background: #f5f4ee;
  }
  &:focus {
    outline: 1px solid rgb(160, 101, 65);
  }

  &:last-child {
    border-right: none;
  }
`;

const Container = styled.div`
  width: calc(100vw - 60px);
  display: flex;
  margin: 0 auto;
  background: rgb(248, 247, 243);
  border-radius: 5px;
`;
