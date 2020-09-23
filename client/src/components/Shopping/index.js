import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";

import LoadingIcon from '../LoadingIcon/index'
import Product from "./Product";

import { getCartItemArray } from "../reducers/cart-reducers";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { receiveItems } from "../action";

const Shopping = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    // fetchProducts();
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        // items = data
        // dispatch(receiveItems(data))
        setItems(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Wrapper>
      {items.length > 0 ?
        items.map((item) => {
          // we pass the item with {...item} so we can access his properties more easily in product
          return <Product key={item._id} {...item} />;
        }) : <LoadingIcon />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 34%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

export default Shopping;
