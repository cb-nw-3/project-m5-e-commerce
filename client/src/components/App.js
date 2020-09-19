import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemGridWrapper from "./ItemGridWrapper";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <Wrapper>
      <Header />
      <ItemGridWrapper />
      <CartWrapper>
        <Cart />
      </CartWrapper>
      <GlobalStyles />
    </Wrapper>
  );
}

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px #ff406e;
  padding-left: 8px;
  grid-row: first-line;
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "header header header header"
    "main main main sidebar";
  /* grid-gap: 64px; */
`;

export default App;
