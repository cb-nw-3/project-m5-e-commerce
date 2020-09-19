// Libraries
import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentModal from "../Payment/PaymentModal";

// Styles
import styled from "styled-components";

const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <CartBtn onClick={() => setIsOpen(!isOpen)}>
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
