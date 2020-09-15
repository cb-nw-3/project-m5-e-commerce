import React from "react";
import styled from "styled-components";


const CartFooter = () => {
  const handleCartPurchase = (event) => {
    event.preventDefault();
    fetch('/cartItems', {
      method: 'POST',
      body: JSON.stringify({
        // Cart object
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => {
    })
    .catch(err => console.log(err))
  };

  return (
    <CartFooterContainer>
      <form><StyledButton>Purchase</StyledButton></form>
      <PriceTotal>$00.00</PriceTotal>
    </CartFooterContainer>
  );
};

const CartFooterContainer = styled.div``;
const StyledButton = styled.button``;
const PriceTotal = styled.p``;

export default CartFooter;
