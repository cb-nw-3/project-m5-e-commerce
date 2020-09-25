import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// goal is to display details of a specific product
// information : the id of the product(from params)
// we will fetch the data from the server

// useState to store the info of the product
// useEffect to get data about the product
// use params to get the id from the url

const logo = require("../assets/logo.jpg");

const ProductDetails = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  React.useEffect(() => {
    fetch(`/item/${itemId}`)
      .then((res) => res.json())
      .then((res) => setItem(res[0]));
  }, [itemId]);
  console.log(item);

  if (!item) return <>loading</>;
  return (
    <>
      <Wrapper>
        <StoreLogoLowOpacity src={logo} />
        <Div>
          <ProductInfo>
            <Span>
              <strong> left in store :</strong>
              {item.numInStock}
            </Span>
            <Span>
              <strong>Price :</strong> {item.price}
            </Span>
            <Span>
              <strong>Body Location : </strong>
              {item.body_location}
            </Span>
            <Span>
              <strong>Category :</strong>
              {item.category}
            </Span>
            <Span>
              <strong> ID :</strong>
              {item._id}
            </Span>
            <Span>
              <strong>Company ID :</strong>
              {item.companyId}
            </Span>
          </ProductInfo>
          <ProductPhoto>
            <Img src={item.imageSrc} alt="productImage" />
            <SpanName>{item.name}</SpanName>
          </ProductPhoto>
        </Div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  background-color: white;
`;

const Img = styled.img`
  border-radius: 10%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-around;
  justify-content: space-evenly;
`;

const ProductPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  width: 250px;
  font-size: 25px;
  font-family: "Times New Roman", Times, serif;
`;

const StoreLogoLowOpacity = styled.img`
  opacity: 0.5;
  padding-bottom: 30px;
  width: 220px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  border-radius: 50%;
  background-color: white;
  padding: 15px;
  border: 1px solid black;
  border-radius: 3px;
`;

const Span = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  :hover {
    background: lightblue;
    font-size: 150%;
  }
`;

const SpanName = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 50px;
  font-family: "Times New Roman", Times, serif;
`;

export default ProductDetails;
