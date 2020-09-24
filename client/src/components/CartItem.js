import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

import { updateQuantity, removeItem } from "../actions/actions";

import UnstyledButton from "./GenericButton";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header>
        {item.name}
        <CloseBtn onClick={() => dispatch(removeItem(item.id))}>
          <FaShoppingCart icon={FaRegTimesCircle} />
        </CloseBtn>
      </Header>
      <Body>
        Quantity:{" "}
        <TextInput
          value={item.quantity}
          onChange={(ev) => dispatch(updateQuantity(item.id, ev.target.value))}
        />
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.1);
  font-family: "Titillium Web", sans-serif;
  margin: 0 -16px;
  margin-bottom: 16px;
  color: black;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Titillium Web", sans-serif;
  align-items: center;
  font-size: 21px;
  font-weight: 500;
  padding: 8px 16px;
`;

const CloseBtn = styled(UnstyledButton)`
  font-family: "Titillium Web", sans-serif;
  padding: 8px 0px;
`;

const Body = styled.div`
  font-size: 17px;
  font-family: "Titillium Web", sans-serif;
  color: #ccc;
  background: rgba(0, 0, 0, 0.25);
  padding: 8px 16px;
`;

const TextInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 3px solid white;
  font-family: "Titillium Web", sans-serif;
  width: 30px;
  height: 30px;
  color: white;
  font-size: inherit;
  padding: 4px;
  text-align: center;
  font-weight: bold;
`;

export default CartItem;
