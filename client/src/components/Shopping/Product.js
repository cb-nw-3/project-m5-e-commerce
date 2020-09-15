import React from "react";
import { useHistory, Link } from "react-router-dom";
// allows us to use dispatch for the reducers action
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import LoadingIcon from '../LoadingIcon/index'

import { addItem } from '../action';

const Product = ({ item }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  function handleClick(ev) {
    ev.preventDefault();
    history.push(`/Shopping/`);
  }
  return item ? (
    <Wrapper>
      <div>
        <div>
          <a href="/shopping">
            <img src={item.imageSrc} alt="productImage" />
          </a>
          <div>
            <a href="/shopping">{item.name}</a>
            <h6>$ {item.price}</h6>
            <Button onClick={() => {
              dispatch(addItem({}))
            }}>Add to cart</Button>

            {/* need to implement addItem function on the button  */}
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
