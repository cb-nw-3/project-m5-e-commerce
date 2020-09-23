import React from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";

const bag = require("../assets/bag.jpg");
const Cart = () => {
  return (
    <CartContainer>
      <CartHeader imgSrc={bag} />
      <CartBody />
      <CartFooter />
    </CartContainer>
  );
};

const CartContainer = styled.div`
  background-color: white;
  width: 33%;
  float: right;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Cart;
