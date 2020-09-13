import React from "react";
import styled from "styled-components";

const CartItemDescription = () => {
  return (
    <>
      <CartItemImage></CartItemImage>
      <CartItemName>item name</CartItemName>
      <CartItemPrice>item price</CartItemPrice>
    </>
  );
};

const CartItemImage = styled.img``;
const CartItemName = styled.p``;
const CartItemPrice = styled.p``;

export default CartItemDescription;
