import React from "react";
import styled from "styled-components/macro";
import { THEME } from "../components/Style/Theme";
import { useSelector } from "react-redux";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

export const Buttons = ({ children, onClick, id, numInStock }) => {
  const isAddedToCart = useSelector((state) =>
    state.purchase[id] ? state.purchase[id].isAddedToCart : false
  );
  const isNotInStock = numInStock > 0 ? false : true;

  return (
    <Button onClick={onClick} disabled={isAddedToCart || isNotInStock}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  background-color: #d8d8d8;
  border: 1px solid #d8d8d8;
  border-radius: 50%;
  margin: 0 5px 0 5px;
  color: black;
  font-size: 16px;
  height: 25px;
  width: 25px;
  padding: 5px;
  display: inline-block;

  &:hover {
    box-shadow: none;
    cursor: auto;
  }
`;

export const BuyButton = ({ onClick, id, numInStock }) => {
  const isAddedToCart = useSelector((state) =>
    state.purchase[id] ? state.purchase[id].isAddedToCart : false
  );
  const isNotInStock = numInStock > 0 ? false : true;

  return (
    <ButtonAddToCart onClick={onClick} disabled={isAddedToCart || isNotInStock}>
      <StyledCartIcon />
      <BuyText>
        {isAddedToCart
          ? "Added to Cart"
          : isNotInStock
          ? "Out of Stock"
          : "Add to Cart"}
      </BuyText>
    </ButtonAddToCart>
  );
};

const BuyText = styled.h4`
  font-weight: 400;
`;

const ButtonAddToCart = styled.button`
  transition: all 100ms ease-in 0s;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 500;
  background-color: ${THEME.secondary};
  box-shadow: rgba(252, 176, 59, 0.1) 0px 0px 2rem,
    #f79d02 0px 0px 0px 1px inset;
  min-width: 150px;
  border: none;

  &:hover {
    background: #fcc46d;
    text-decoration: none;
  }

  &:active {
    box-shadow: rgba(252, 176, 59, 0.1) 0px 0px 1rem,
      #f79d02 0px 0px 0px 2px inset;
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${THEME.tertiary};
    color: white;
    box-shadow: none;

    &:hover {
      box-shadow: none;
      cursor: auto;
    }
  }
`;

const StyledCartIcon = styled(ShoppingCart)`
  height: 20px !important;
  width: 20px !important;
  margin-right: 10px;
`;

export const ModalButton = ({ onClick, children }) => {
  return <ButtonPurchase onClick={onClick}>{children}</ButtonPurchase>;
};

const ButtonPurchase = styled.button`
  display: flex;
  align-items: center;
  min-width: 40px;
  border: none;
  box-sizing: border-box;
  text-transform: uppercase;
  background-color: ${(props) => props.color};
  border-radius: 25px;
  padding: 10px 30px;
  margin: 10px 0 0 30px;
  transition: background-color 500ms ease-in-out;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: #fcc46d;
    text-decoration: none;
  }

  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${THEME.tertiary};
    color: white;

    &:hover {
      box-shadow: none;
      cursor: auto;
    }
  }
`;
