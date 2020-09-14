import React from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";

const Cart = ({ bacon }) => {
  const storeArray = bacon.map((item) => {
    return (
      <div>
        <h1>{item.name}</h1>
        <img src={item.imageSrc}></img>
      </div>
    );
  });
  console.log(storeArray);
  return (
    <CartContainer>
      {storeArray}
      <CartHeader />
      <CartBody />
      <CartFooter />
    </CartContainer>
  );
};

const CartContainer = styled.div`
  background-color: beige;
  width: 33%;
  float: right;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Cart;
