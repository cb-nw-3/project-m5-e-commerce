import React from "react";
import styled from "styled-components";
import { getCartItemArray } from "../reducers/index";
import { useSelector } from "react-redux";

const CartFooter = () => {
  const cartItemNewState = useSelector(getCartItemArray);
  const [total, setTotal] = React.useState(0);
  const handleCartPurchase = (event) => {
    event.preventDefault();
    fetch("/cartItems", {
      method: "POST",
      body: JSON.stringify({
        cartItemNewState,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((totalobject) => {
        setTotal(totalobject.status);
      })

      .catch((err) => console.log(err));
  };

  return (
    <CartFooterContainer>
      <form>
        <StyledButton onClick={handleCartPurchase}>Purchase</StyledButton>
      </form>
      <PriceTotal>${total}</PriceTotal>
    </CartFooterContainer>
  );
};

const CartFooterContainer = styled.div``;
const StyledButton = styled.button``;
const PriceTotal = styled.p``;

export default CartFooter;
