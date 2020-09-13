import React from "react";
import styled from "styled-components";

const CartItemInput = () => {
  return (
    <>
      <CartItemDelete></CartItemDelete>
      <CartItemQuantity></CartItemQuantity>
    </>
  );
};

const CartItemDelete = styled.button``;
const CartItemQuantity = styled.input``;

export default CartItemInput;
