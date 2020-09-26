import React from "react";
import styled from "styled-components";

const CartHeader = ({ imgSrc }) => {
  return (
    <CartTitleContainer>
      <CartTitle><div>Your Shopping Bag</div></CartTitle>
      <Image src={imgSrc} />
    </CartTitleContainer>
  );
};

const CartTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: bold;
  font-size: 15px;
  display: block;
  flex-wrap: nowrap;
  white-space: nowrap;
  padding-left:100 px;
`;
const CartTitleContainer = styled.div`
text-align:center;
  width: 33%;
  display: flex;
  flex-wrap: nowrap;
`;

const Image = styled.img`
  width: 200px;
`;

export default CartHeader;
