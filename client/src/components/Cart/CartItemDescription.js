import React from "react";
import styled from "styled-components";

const CartItemDescription = ({ name, price }) => {
  return (
    <>
      <CartItemImage></CartItemImage>
      <CartItemName>{name}</CartItemName>
      <CartItemPrice>{price}</CartItemPrice>
    </>
  );
};

const CartItemImage = styled.img``;
const CartItemName = styled.p``;
const CartItemPrice = styled.p``;

export default CartItemDescription;
