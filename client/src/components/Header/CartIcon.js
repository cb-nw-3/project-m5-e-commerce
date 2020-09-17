// Libraries
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// Styles
import styled from "styled-components";

const CartIcon = () => {
  return (
    <Wrapper>
      <ShoppingCartIcon />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: BLACK;
  padding: 30px;
`;

export default CartIcon;
