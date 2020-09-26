import React from "react";
import styled from "styled-components";

import CartItemInput from "./CartItemInput";
import CartItemDescription from "./CartItemDescription";

import { getCartItemArray } from "../reducers/cart-reducers";
import { useSelector } from "react-redux";

const CartBody = () => {
  const state = useSelector(getCartItemArray);

  return (
    <CartItemContainer>
      {state.map((cartItem) => {
        return (
          <>
            <CartItemDescription
              key={cartItem._id}
              {...cartItem}
            />
            <CartItemInput
              key={cartItem._id + 0.1}
              {...cartItem}
            />
          </>
        );
      })}
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  background-color: white;
`;

export default CartBody;
