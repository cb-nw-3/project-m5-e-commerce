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
const CartItemName = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  display: block;
  flex-wrap: nowrap;
  white-space: nowrap;
 `;


const CartItemPrice = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  display: block;
  flex-wrap: nowrap;
  white-space: nowrap;
`;

export default CartItemDescription;
