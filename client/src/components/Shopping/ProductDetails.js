import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StoreLogo from "../Header/StoreLogo";
import LoadingIcon from "../LoadingIcon/index";

import { useDispatch } from "react-redux";
import { addItem } from "../action";

const logo2 = require("../assets/bagel.gif");

const ProductDetails = () => {
  const dispatch = useDispatch();

  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  let price;
  let _id;
  let name;
  let numInStock;

  React.useEffect(() => {
    fetch(`/item/${itemId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setItem(res[0]);
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  return item ? (
    <Wrapper>
      <p style={{ display: "none" }}>
        {(price = item.price)}
        {(_id = item._id)}
        {(name = item.name)}
        {(numInStock = item.numInStock)}
      </p>

      <StoreLogo imgSrc={logo2} />
      <ProductDetailContainer>
        <ProductPhoto>
          <Img src={item.imageSrc} alt="productImage" />
          <SpanName>{item.name}</SpanName>
        </ProductPhoto>
        <ProductInfo>
          <Span>
            Available in store :<InfoValue>{item.numInStock}</InfoValue>
          </Span>
          <Span>
            Price : <InfoValue>{item.price}</InfoValue>
          </Span>
          <Span>
            Body Location :<InfoValue>{item.body_location}</InfoValue>
          </Span>
          <Span>
            Category :<InfoValue>{item.category}</InfoValue>
          </Span>
          <Span>
            ID :<InfoValue>{item._id}</InfoValue>
          </Span>
          <Span>
            Company ID :<InfoValue>{item.companyId}</InfoValue>
          </Span>
        </ProductInfo>
        {numInStock > 0 ? (
          <Button
            onClick={(ev) => {
              dispatch(addItem({ _id, name, price, numInStock }));
            }}
            disabled={numInStock > 0 ? false : true}
          >
            Add to cart
          </Button>
        ) : (
          <OutOfStock>Out Of Stock</OutOfStock>
        )}
      </ProductDetailContainer>
    </Wrapper>
  ) : (
    <LoadingIcon />
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  background-color: white;
`;
const InfoValue = styled.span`
  font-weight: bold;
  margin-left: 5px;
`;
const Img = styled.img`
  border-radius: 10%;
  margin-bottom: 50px;
  width: 300px;
  height: 300px;
`;
const Button = styled.button`
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
const OutOfStock = styled.p`
  color: #a181f5;
  font-weight: bold;
`;
const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: space-around;
  justify-content: space-evenly;
  height: 70vh;
`;
const ProductPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 500px;
`;
const ProductInfo = styled.div`
  align-items: center;
  text-align: center;
  border-radius: 20px;
  box-shadow: 6px 2px 18px 1px rgba(150, 150, 150, 1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  background-color: white;
  padding: 15px;
  font-family: "Montserrat", sans-serif;
  width: 350px;
  height: 500px;
`;
const Span = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  :hover {
    background: lightgray;
    font-size: 150%;
  }
`;
const SpanName = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export default ProductDetails;
