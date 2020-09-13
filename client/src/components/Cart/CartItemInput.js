import React from "react";
import styled from "styled-components";

const CartItemInput = () => {
  return (
    <>
      <CartItemDelete>delete item</CartItemDelete>
      <CartItemQuantity>quantity</CartItemQuantity>
    </>
  );
};

const CartItemDelete = styled.button``;
const CartItemQuantity = styled.input``;

export default CartItemInput;
