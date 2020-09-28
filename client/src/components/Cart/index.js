import React from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";
import { getCartItemArray } from "../reducers/cart-reducers";
import { useSelector } from "react-redux";

const bag = require("../assets/bag.jpg");

const Cart = () => {
  const state = useSelector(getCartItemArray);

  return (
    <CartContainer>
      <CartHeader imgSrc={bag} />
      {state.length > 0 ? (
        <>
          <CartBody />
          <CartFooter />
        </>
      ) : null}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  background-color: white;
  flex: 2;
  height: 83vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Cart;
