import React from "react";
import styled from "styled-components";

const CartHeader = ({ imgSrc }) => {
  return (
    <CartTitleContainer>
      <CartTitle>My Shopping Bag</CartTitle>
      <Image src={imgSrc} />
    </CartTitleContainer>
  );
};

const CartTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
`;
const CartTitleContainer = styled.div`
  width: 33%;
`;

const Image = styled.img`
  width: 200px;
`;

export default CartHeader;
