import react from "react";
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

const CartItemContainer = styled.div``;
const CartItemDescription = styled.div``;

export default CartBody;
