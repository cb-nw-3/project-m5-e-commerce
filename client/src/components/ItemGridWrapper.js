import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const ItemGridWrapper = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Wrapper>
      {items.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 24px;
`;

export default ItemGridWrapper;
