import React from "react";
import { useHistory, Link } from "react-router-dom";

import styled from "styled-components";

const Product = ({ product }) => {
  let history = useHistory();
  function handleClick(ev) {
    ev.preventDefault();
    history.push(`/Shopping/`);
  }
  return product ? (
    <Wrapper>
      <div>
        <div>
          <Link to="/shopping">
            <img src={product.imageSrc} alt="productImage" />
          </Link>
          <div>
            <Link to="/shopping">{product.name}</Link>
            <h6>$ {product.price}</h6>
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
