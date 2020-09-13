import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "./Button";

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
        <div key={item._id}>
          <ItemWrapper>
            <Title> {item.name}</Title>
            <div>{item.description}</div>
            <div>{item.price}</div>
            <Button>Learn More</Button>
          </ItemWrapper>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 24px;
`;

const ItemWrapper = styled.article`
  padding: 16px;
  font-family: "Titillium Web", sans-serif;
  background: #fff;
  box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
    3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
    3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 12px;
  border: 3px solid rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  transition: transform 400ms;
  transform-origin: center center;
  &:hover {
    transform: scale(1.25) rotate(10deg);
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  margin-top: 8px;
  font-size: 22px;
  font-weight: 600;
`;

export default ItemGridWrapper;
