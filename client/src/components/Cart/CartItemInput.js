import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../action";

const CartItemInput = ({ quantity, _id, numInStock }) => {
  console.log(numInStock)
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
    </>
  );
};

const CartItemDelete = styled.button``;
const CartItemQuantity = styled.input``;

export default CartItemInput;
