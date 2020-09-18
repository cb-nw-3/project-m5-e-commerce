import React from "react";
import styled from "styled-components";

import { getCartItemArray } from "../reducers/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartFooter = () => {
  const dispatch = useDispatch();
  const state = useSelector(getCartItemArray);
  // let amountOfItems =
  //   state.length !== 0
  //     ? state.reduce((amount, item) => {
  //         return amount + item.quantity;
  //       }, 0)
  //     : 0;
  let priceOfItems =
    state.length !== 0
      ? state.reduce((price, item) => {
          return price + parseFloat(item.price.slice(1)) * item.quantity;
        }, 0)
      : 0;
  let truePriceOfItems =
    priceOfItems !== 0
      ? priceOfItems.toFixed(2).toString().slice(0, -3) +
        "." +
        priceOfItems.toFixed(2).toString().slice(-2)
      : "00.00";

  const handleCartPurchase = (event) => {
    event.preventDefault();
    fetch("/cartItems", {
      method: "POST",
      body: JSON.stringify({
        state,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    fetch("/upDateStock", {
      method: "POST",
      body: JSON.stringify({
        //we are sending this body over to backend upDateStock
        purchasedStock: state,
      }),
      headers: {
        //tells server what language
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CartFooterContainer>
      <form>
        <StyledButton onClick={handleCartPurchase}>Purchase</StyledButton>
      </form>
      <PriceTotal>${truePriceOfItems}</PriceTotal>
    </CartFooterContainer>
  );
};

const CartFooterContainer = styled.div``;
const StyledButton = styled.button``;
const PriceTotal = styled.p``;

export default CartFooter;
