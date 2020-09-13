import React from "react";
import styled from "styled-components";

import CartItemInput from "./CartItemInput";
import CartItemDescription from "./CartItemDescription";

const CartBody = () => {
  return (
    <>
      <CartItemContainer>
        <CartItemDescription />
        <CartItemInput />
      </CartItemContainer>
    </>
  );
};

export default CartBody;

const CartItemContainer = styled.div``;
