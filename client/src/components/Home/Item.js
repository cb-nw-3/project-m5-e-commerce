import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

const Item = ({ item }) => {
  const history = useHistory();

  const viewItem = (id) => {
    history.push("/item/" + id)
  }

  return (
    <Wrapper>
      <ItemBtn onClick={() => { viewItem(item._id) }}>
        <ImageWrapper>
          <ItemImage src={item.imageSrc} />
          {item.numInStock === 0 && <OutOfStock>
            <StockText >Out of stock</StockText>
          </OutOfStock>}
        </ImageWrapper>
        <ItemName>
          {item.name}
        </ItemName>
        <ItemPrice>{item.price}</ItemPrice>
      </ItemBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px 5px;
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  height: auto;
  text-align: center;
  position: relative;
  padding: 8px;
  border-radius: 4px;
`;

const ItemImage = styled.img`
  max-width: 60%;
  height: auto;
`;

const ItemName = styled.h2`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 300;
`;

const ItemPrice = styled.h3`
  margin-top: 4px;
  font-size: 20px;
  font-weight: 600;
`;

const ItemBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.1);
    transition: .3s ease-in-out;
  }
`;

const OutOfStock = styled.div`
  position: absolute;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StockText = styled.div`
  background-color: rgba(70, 70, 70, 0.8);
  padding: 10px;
  border-radius: 10px;
`;


export default Item;
