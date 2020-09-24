import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { Buttons } from "../Buttons";
import { THEME } from "../Style/Theme";
import { BuyButton } from "../Buttons";

const QuantityBar = ({ id, addToCart }) => {
  const cartQuantity = useSelector((state) =>
    state.purchase[id] ? state.purchase[id].quantity : 1
  );
  const itemInStock = useSelector((state) =>
    state.purchase[id] ? state.purchase[id].numInStock : 1
  );
  const [quantity, setQuantity] = React.useState(cartQuantity);

  return (
    <>
      <Wrapper>
        <Text>Quantity:</Text>
        <Buttons id={id} onClick={() => setQuantity(quantity - 1 || 1)}>
          -
        </Buttons>
        <Span>{quantity}</Span>
        <Buttons id={id} onClick={() => setQuantity(Math.min(quantity + 1))}>
          +
        </Buttons>
      </Wrapper>
      <BuyButton
        id={id}
        type="button"
        onClick={() => addToCart(quantity)}
      ></BuyButton>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: ${THEME.mobile}) {
    justify-content: initial;
  }
`;

const Text = styled.span`
  margin-right: 10px;
  font-size: 14px;
`;

const Span = styled.span`
  text-align: center;
  width: 50px;
  background: ${THEME.white};
  font-size: 18px;
`;

export default QuantityBar;
