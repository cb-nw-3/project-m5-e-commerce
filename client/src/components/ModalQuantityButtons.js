import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

export const Buttons = ({ children, onClick, id, numInStock }) => {
  const isAddedToCart = useSelector((state) =>
    state.purchase[id] ? state.purchase[id].isAddedToCart : false
  );
  const isNotInStock = numInStock > 0 ? false : true;

  return (
    <Button onClick={onClick} disabled={isAddedToCart || isNotInStock}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  background-color: #d8d8d8;
  border: none;
  border-radius: 50%;
  margin: 0 10px 0 10px;
  color: black;
  font-size: 16px;
  height: 30px;
  width: 30px;
  padding: 5px;

  &:hover {
    box-shadow: none;
    cursor: auto;
  }
`;
