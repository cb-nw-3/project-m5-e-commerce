import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/index";
import LoadingIcon from '../LoadingIcon/index'
// goal is to display details of a specific product
// information : the id of the product(from params)
// we will fetch the data from the server

// useState to store the info of the product
// useEffect to get data about the product
// use params to get the id from the url

const logo2 = require("../assets/bagel.gif");

const ProductDetails = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  React.useEffect(() => {
    fetch(`/item/${itemId}`)
      .then((res) => res.json())
      .then((res) => setItem(res[0]));
  }, [itemId]);
  console.log(item);

  if (!item) return <LoadingIcon />;
  return (
      <Wrapper>
        <Header />
        <ProductDetailContainer>
          <ProductPhoto>
            <Img src={item.imageSrc} alt="productImage" />
            <SpanName>{item.name}</SpanName>
          </ProductPhoto>
          <ProductInfo>
            <Span>
              Available in store :
              <InfoValue>{item.numInStock}</InfoValue>
            </Span>
            <Span>
              Price : <InfoValue>{item.price}</InfoValue>
            </Span>
            <Span>
              Body Location : 
              <InfoValue>{item.body_location}</InfoValue>
            </Span>
            <Span>
              Category :
              <InfoValue>{item.category}</InfoValue>
            </Span>
            <Span>
              ID :
              <InfoValue>{item._id}</InfoValue>
            </Span>
            <Span>
              Company ID :
              <InfoValue>{item.companyId}</InfoValue>
            </Span>
          </ProductInfo>
        </ProductDetailContainer>
      </Wrapper>
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
`
const Img = styled.img`
  border-radius: 10%;
  margin-bottom: 50px;
  width: 300px;
  height: 300px;
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
