import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";

import LoadingIcon from '../LoadingIcon/index'
import Product from "./Product";

import { getCartItemArray } from "../reducers/cart-reducers";
import { getBodyPart } from '../reducers/bodypart-reducers'
import { getSorting } from '../reducers/sort-reducers'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { receiveItems } from "../action";

const Shopping = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [items, setItems] = React.useState([]);

  // Filter out the items based on the bodyPart state
  const bodyPartState = useSelector(getBodyPart);
  const sortingState = useSelector(getSorting);

  //Sorting methods
  const sortAlphaAZ = (arr) => arr.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.price > b.price) ? 1 : -1) : -1 );
  const sortAlphaZA = (arr) => arr.sort((a, b) => (a.name < b.name) ? 1 : (a.name === b.name) ? ((a.price > b.price) ? 1 : -1) : -1 );
  const sortPriceInc = (arr) => arr.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.name > b.name) ? 1 : -1) : -1 );
  const sortPriceDec = (arr) => arr.sort((a, b) => (a.price < b.price) ? 1 : (a.price === b.price) ? ((a.price > b.price) ? 1 : -1) : -1 );
  let sortData = sortAlphaAZ;
  React.useEffect(() => {
    //srtingState modifies the sorting method used
    if(sortingState === 'Alphabetically (A to Z)'){
      sortData = sortAlphaAZ;
    } else if(sortingState === 'Alphabetically (Z to A)'){
      sortData = sortAlphaZA;
    } else if(sortingState === 'Price ($ to $$$)'){
      sortData = sortPriceInc;
    } else if (sortingState === 'Price ($$$ to $)'){
      sortData = sortPriceDec;
    }


    // fetchProducts();
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        //This renders all the items
        setItems(sortData(data));
        //This will render out only if not selected all or undefined
        if(bodyPartState !== ( undefined || 'All')){
          setItems(data.filter(product => product.body_location === bodyPartState));
        }
      })
      .catch(err => console.log(err));
  }, [bodyPartState, sortingState ]);

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
