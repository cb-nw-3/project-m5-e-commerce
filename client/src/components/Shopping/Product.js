import React from "react";
import { useHistory, Link } from "react-router-dom";
// allows us to use dispatch for the reducers action
import { useDispatch } from "react-redux";
import styled from "styled-components";
import LoadingIcon from "../LoadingIcon/index";

import { addItem } from "../action";
// item property
const Product = ({ imageSrc, name, price, _id }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  function handleClick(ev) {
    ev.preventDefault();
    history.push(`/Shopping/`);
  }
  return name ? (
    <Wrapper>
      <div>
        <div>
          <a href={`/shop/${_id}`}>
            <img src={imageSrc} alt="productImage" />
          </a>
          <div>
            <a href={`/shop/${_id}`}>{name}</a>
            <a> {item.numInStock} </a>
            <h6>{price}</h6>
            <Button
              onClick={() => {
                dispatch(addItem({ _id, name, price }));
              }}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  ) : (
    <LoadingIcon />
  );
};

const Wrapper = styled.div``;
const Button = styled.button``;
export default Product;
