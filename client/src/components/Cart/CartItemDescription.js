import React, { Component } from "react";
import styled from "styled-components";

const CartItemDescription = () => {
  return (
    <>
      <CartItemImage></CartItemImage>
      <CartItemName>item name from cart reducer</CartItemName>
      <CartItemPrice>item price from cart reducer</CartItemPrice>
    </>
  );
};

const CartItemImage = styled.img``;
const CartItemName = styled.p``;
const CartItemPrice = styled.p``;

export default CartItemDescription;
