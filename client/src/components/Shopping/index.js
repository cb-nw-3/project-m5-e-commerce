import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";

import Product from "./Product";

const Shopping = () => {
  const [items, setItems] = React.useState([]);
  // const fetchProducts = () => {
  // };
  React.useEffect(() => {
    // fetchProducts();
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [setItems]);

  return (
    <Wrapper>
      {items &&
        items.map((item) => {
          // we pass the item with {...item} so we can access his properties more easily in product
          return <Product key={item._id} {...item} />;
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 41%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

export default Shopping;
