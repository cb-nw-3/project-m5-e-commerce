import React, { Component } from "react";
import styled from "styled-components";

const CartItemInput = () => {
  return (
    <CartItemInputContainer>
      <CartItemDelete>delete item</CartItemDelete>
      <CartItemQuantity type={"number"} placeholder={"qty from reducer"} />
    </CartItemInputContainer>
  );
};

const CartItemInputContainer = styled.div``;
const CartItemDelete = styled.button``;
const CartItemQuantity = styled.input``;

export default CartItemInput;
