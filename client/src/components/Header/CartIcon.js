// Libraries
import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentModal from "../Payment/PaymentModal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../Actions";

// Styles
import styled from "styled-components";

const CartIcon = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <CartBtn onClick={() => dispatch(toggleModal())}>
        <ShoppingCartIcon />
      </CartBtn>
      {isOpen ? <PaymentModal /> : null}
    </Wrapper>
  );
};

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
`;

export default CartIcon;
