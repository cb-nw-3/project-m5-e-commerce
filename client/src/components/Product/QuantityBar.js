import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { Buttons } from "../Buttons";
import { THEME } from "../Style/Theme";
import { BuyButton } from "../Buttons";

const QuantityBar = ({ id, addToCart, numInStock }) => {
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
        <Buttons
          id={id}
          numInStock={numInStock}
          onClick={() => setQuantity(quantity - 1 || 1)}
        >
          -
        </Buttons>
        <Span>{quantity}</Span>
        <Buttons
          id={id}
          numInStock={numInStock}
          onClick={() => setQuantity(Math.min(quantity + 1))}
        >
          +
        </Buttons>
      </Wrapper>
      <div>
        <BuyButton
          id={id}
          type="button"
          numInStock={numInStock}
          onClick={() => addToCart(quantity)}
        ></BuyButton>
      </div>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 15px 0 30px 0;

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
