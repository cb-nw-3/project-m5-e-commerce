import React from "react";
import styled from "styled-components";
import { getCartItemArray } from "../reducers/cart-reducers";
import { useSelector } from "react-redux";

const CartHeader = ({ imgSrc }) => {
  const state = useSelector(getCartItemArray);

  return (
    <CartTitleContainer>
      {state.length > 0 ? (
        <CartTitle>Shopping Bag</CartTitle>
      ) : (
        <Image src={imgSrc} />
      )}
    </CartTitleContainer>
  );
};

const CartTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: bold;
  font-size: 30px;
  display: block;
  white-space: nowrap;
  margin-left: 50px;
`;
const CartTitleContainer = styled.div`
  text-align: center;
  width: 20%;
  display: flex;
  flex-wrap: nowrap;
`;
const Image = styled.img`
  width: 400px;
  margin: 0 auto;
`;

export default CartHeader;
