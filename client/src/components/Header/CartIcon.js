// Libraries
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// Styles
import styled from "styled-components";
import { THEME } from "../Style/Theme";

const CartIcon = () => {
  return (
    <Wrapper>
      <ShoppingCartIcon />
      <ShoppingCartIconCount>12</ShoppingCartIconCount>
    </Wrapper>
  );
};

const ShoppingCartIconCount = styled.span`
  height: 25px;
  width: 25px;
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 4px 7px 4px 7px;
  vertical-align: top;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  margin-top: -10px;
  margin-left: -10px;
`;

const Wrapper = styled.section`
  color: BLACK;
  padding: 30px;

  @media (max-width: ${THEME.mobile}) {
    padding: 5px;
  }
`;

export default CartIcon;
