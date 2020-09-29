import React from "react";
import styled from "styled-components";

import CartItemInput from "./CartItemInput";
import CartItemDescription from "./CartItemDescription";

import { getCartItemArray } from "../reducers/cart-reducers";
import { useSelector } from "react-redux";

const CartBody = () => {
  const state = useSelector(getCartItemArray);

  return (
    <CartItem>
      {state.map((cartItem) => {
        return (
          <CartItemContainer>
            <CartItemImage src={cartItem.imageSrc} />
            <CartItemDescription key={cartItem._id.toString()} {...cartItem} />
            <CartItemInput
              key={cartItem._id + (0.1).toString()}
              {...cartItem}
            />
          </CartItemContainer>
        );
      })}
    </CartItem>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: inset 3px 0px 28px -10px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  margin-bottom: 5px;
`;
const CartItemImage = styled.img`
  width: 75px;
  height: 75px;
  margin-left: 10px;
  mix-blend-mode: multiply;
`;
const CartItem = styled.div`
  background-color: white;
  margin: 0 10px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

export default CartBody;
