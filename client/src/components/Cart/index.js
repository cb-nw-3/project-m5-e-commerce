import React from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";

const Cart = () => {
  return (
    <CartContainer>
      <CartHeader />
      <CartBody />
      <CartFooter />
    </CartContainer>
  );
};

const CartContainer = styled.div`
  background-color: beige;
  width: 25%;
  float: right;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Cart;
