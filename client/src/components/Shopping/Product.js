import React from "react";
import { useHistory, Link } from "react-router-dom";

import styled from "styled-components";

const Product = ({ item }) => {
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
            <Button>Add to cart</Button>

            {/* need to implement addItem function on the button  */}
          </div>
        </div>
      </div>
    </Wrapper>
  ) : (
    <div>loading1</div>
  );
};

const Wrapper = styled.div``;
const Button = styled.button``;
export default Product;
