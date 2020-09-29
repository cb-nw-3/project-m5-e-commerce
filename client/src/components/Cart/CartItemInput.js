import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../action";
import { BsTrash2 } from "react-icons/bs";

const CartItemInput = ({ quantity, _id, numInStock }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <CartItemDelete
        onClick={() => {
          dispatch(removeItem({ _id }));
        }}
      >
        <BsTrash2 />
      </CartItemDelete>
      <CartItemQuantity
        type={"number"}
        placeholder={"item qty"}
        value={quantity}
        min={0}
        max={numInStock}
        onChange={(e) => {
          if (parseInt(e.target.value) <= 0) {
            dispatch(removeItem({ _id }));
          } else {
            let quantity = parseInt(e.target.value);
            dispatch(updateQuantity({ _id, quantity }));
          }
        }}
      ></CartItemQuantity>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
`;
const CartItemDelete = styled.button`
  background-color: #f992fd;
  border: 1px solid #f992fd;
  width: 40px;
  height: 30px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;
  margin-bottom: 10px;

  &:hover {
    background-color: #f45ef9;
  }
`;
const CartItemQuantity = styled.input`
  width: 35px;
  line-height: 200%;
  border: none;
  background-color: #bde5c2;
  border-radius: 8px;
`;

export default CartItemInput;
