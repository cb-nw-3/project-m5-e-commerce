import React from "react";
import styled from "styled-components";

const CartHeader = () => {
  return (
    <CartTitleContainer>
      <CartTitle>My Cart</CartTitle>
    </CartTitleContainer>
  );
};

const CartTitle = styled.h2``;
const CartTitleContainer = styled.div``;

export default CartHeader;
