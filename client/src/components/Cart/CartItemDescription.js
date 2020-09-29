import React from "react";
import styled from "styled-components";

const CartItemDescription = ({ name, price }) => {
  return (
    <Container>
      <CartItemName>{name}</CartItemName>
      <CartItemPrice>{price}</CartItemPrice>
    </Container>
  );
};

const CartItemName = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  display: block;
`;
const CartItemPrice = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export default CartItemDescription;
