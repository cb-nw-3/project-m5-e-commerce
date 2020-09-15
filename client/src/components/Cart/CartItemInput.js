import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../action";

const CartItemInput = ({ quantity, _id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <CartItemDelete
        onClick={() => {
          dispatch(removeItem({ _id }));
        }}
      >
        Delete
      </CartItemDelete>
      <CartItemQuantity
        type={"number"}
        placeholder={"item qty"}
        value={quantity}
        onChange={(e) => {
          let newQuantity = parseInt(e.target.value);
          dispatch(updateQuantity({ _id, newQuantity }));
        }}
      ></CartItemQuantity>
    </>
  );
};

const CartItemDelete = styled.button``;
const CartItemQuantity = styled.input``;

export default CartItemInput;
