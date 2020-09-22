// Libraries
import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentModal from "../Payment/PaymentModal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../Actions";

// Styles
import styled from "styled-components";
import { THEME } from "../Style/Theme";

const CartIcon = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <CartBtn onClick={() => dispatch(toggleModal())}>
        <ShoppingCartIcon />
        <ShoppingCartIconCount>12</ShoppingCartIconCount>
      </CartBtn>
      {isOpen ? <PaymentModal /> : null}
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

const CartBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(1.2);
  }
`;

const Wrapper = styled.section`
  color: BLACK;
  padding: 30px;

  @media (max-width: 873px) {
    padding: 5px;
  }
`;

export default CartIcon;
