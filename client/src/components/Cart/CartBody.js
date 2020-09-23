import React from "react";
import styled from "styled-components";

import CartItemInput from "./CartItemInput";
import CartItemDescription from "./CartItemDescription";

import { getCartItemArray } from "../reducers/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartBody = () => {
  const dispatch = useDispatch();
  const state = useSelector(getCartItemArray);

  return (
    <CartItemContainer>
      {state.map((cartItem) => {
        return (
          <>
            <CartItemDescription key={cartItem._id} name={cartItem.name} price={cartItem.price} />
            <CartItemInput key={cartItem._id + 0.1} {...cartItem} />
          </>
        );
      })}
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div``;

export default CartBody;
