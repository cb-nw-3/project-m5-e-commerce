import React from "react";
import { useHistory, Link } from "react-router-dom";
// allows us to use dispatch for the reducers action
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LoadingIcon from "../LoadingIcon/index";

import { addItem } from "../action";
// item property
const Product = ({ imageSrc, name, price, _id, numInStock }) => {
  const dispatch = useDispatch();

  return name ? (
    <Wrapper>
      <div>
        <div>
          <a href={`/shop/${_id}`}>
            <Img src={imageSrc} alt="productImage" />
          </a>
          <div>
            <a href={`/shop/${_id}`}>{name}</a>
            <h4>{price}</h4>
          </div>
          <p>{numInStock}</p>
        </div>
      </div>
      <Button
        onClick={() => {
          dispatch(addItem({ _id, name, price, numInStock }));
        }}
        disabled={numInStock > 0 ? false : true}
      >
        Add to cart
      </Button>
    </Wrapper>
  ) : (
    <LoadingIcon />
  );
};

const WrapperNathalie = styled.div``;
const ButtonNathalie = styled.button``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: cornsilk;
  text-align: center;
  border: 1px solid black;
  border-radius: 3px;
`;

const Button = styled.button`
  border-radius: 10%;
`;
const Img = styled.img`
  border-radius: 10%;
  width: 100px;
  height: 100px;
`;

export default Product;
