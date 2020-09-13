import React from "react";
import styled from "styled-components";

const CartFooter = () => {
  return (
    <>
      <StyledButton>Purchase</StyledButton>
      <PriceTotal>$00.00</PriceTotal>
    </>
  );
};

const StyledButton = styled.button``;
const PriceTotal = styled.p``;

export default CartFooter;
