import React from "react";
import styled from "styled-components";

const CartItemInput = () => {
  return (
    <>
      <CartItemDelete>Delete</CartItemDelete>
      <CartItemQuantity type={'number'} placeholder={'item qty'}></CartItemQuantity>
    </>
  );
};

const CartItemDelete = styled.button``;
const CartItemQuantity = styled.input``;

export default CartItemInput;
