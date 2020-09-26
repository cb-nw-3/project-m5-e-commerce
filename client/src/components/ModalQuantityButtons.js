import React from "react";
import styled from "styled-components/macro";
import { THEME } from "../components/Style/Theme";

export const Buttons = ({ children, onClick, id, numInStock }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  background-color: #d8d8d8;
  border: none;
  border-radius: 50%;
  margin: 0 10px 0 10px;
  color: black;
  font-size: 16px;
  height: 30px;
  width: 30px;
  padding: 5px;

  @media (max-width: ${THEME.mobile}) {
    background-color: #d8d8d8;
    border: none;
    border-radius: 50%;
    margin: 0 5px 0 5px;
    color: black;
    font-size: 12px;
    height: 20px;
    width: 20px;
    padding: 5px;
  }
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
