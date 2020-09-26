import React from "react";
import styled from "styled-components";

import { getCartItemArray } from "../reducers/cart-reducers";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  emptyCart,
  requestPurchase,
  receivePurchase,
  purchaseError,
} from "../action";
import LoadingIcon from "../LoadingIcon/index";

const CartFooter = () => {
  const dispatch = useDispatch();
  const state = useSelector(getCartItemArray);
  const purchaseStatus = useSelector((state) => state.cartPurchase);
  const cartState = useSelector((state) => state.cart);
  let priceOfItems =
    state.length !== 0
      ? state.reduce((price, item) => {
          return price + parseFloat(item.price.slice(1)) * item.quantity;
        }, 0)
      : 0;
  let truePriceOfItems =
    priceOfItems !== 0
      ? priceOfItems.toFixed(2).toString().slice(0, -3) +
        "." +
        priceOfItems.toFixed(2).toString().slice(-2)
      : "00.00";

  const handleCartPurchase = (event) => {
    dispatch(requestPurchase());
    event.preventDefault();
    fetch("/upDateStock", {
      method: "PATCH",
      body: JSON.stringify({
        //we are sending this body over to backend upDateStock
        purchasedStock: state,
      }),
      headers: {
        //tells server what language
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          dispatch(receivePurchase());
          dispatch(emptyCart());
        } else {
          dispatch(purchaseError(res.error));
        }
      })
      .catch((err) => {
        dispatch(purchaseError(err));
        console.log(purchaseStatus);
      });
  };

  React.useEffect(() => {
    console.log(purchaseStatus);
  }, [cartState]);
  return (
    <CartFooterContainer>
      <form>
        <StyledButton
          onClick={handleCartPurchase}
          disabled={state.length > 0 ? false : true}
        >
          {purchaseStatus.status === "process" ? (
            <LoadingIcon size={25} />
          ) : (
            "Purchase"
          )}
        </StyledButton>
      </form>
      <PriceTotal>${truePriceOfItems}</PriceTotal>
      <Error>
        {purchaseStatus.status === "error" ? purchaseStatus.error : null}
      </Error>
    </CartFooterContainer>
  );
};

const CartFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  background-color: white;
  text-align: center;
`;

const StyledButton = styled.button`
  border-radius: 20px;
  border: 1px solid #ff882e;
  background-color: #ff882e;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  color: #fafafa;
  width: 90px;
  height: 40px;
  align-items: center;
  display: block;
`;

const PriceTotal = styled.p``;
const Error = styled.p``;

export default CartFooter;
