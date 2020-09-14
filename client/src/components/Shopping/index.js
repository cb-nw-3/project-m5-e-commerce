import React from "react";
import styled from "styled-components";

import Product from "./Product";

const Shopping = () => {
  return (
    <Wrapper>
      <Product></Product>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* Temporary styles */
  border: solid 2pt green;
  min-height: 50vh;
  width: 33%;
`;

export default Shopping;
