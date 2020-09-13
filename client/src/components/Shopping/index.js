import React, { Component } from "react";
import styled from "styled-components";

import Item from "./Item";

const Shopping = () => {
  return (
    <Wrapper>
      <Item/>
      <Item/>
      <Item/>
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