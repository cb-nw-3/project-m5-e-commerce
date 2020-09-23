import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemGridWrapper from "./ItemGridWrapper";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <ItemGridWrap>
          <ItemGridWrapper />
        </ItemGridWrap>
        <CartWrapper>
          <Cart />
        </CartWrapper>
        <GlobalStyles />
      </Wrapper>
    </div>
  );
}

const CartWrapper = styled.div`
  width: 20vw;
  height: 400vh;
  grid-area: sidebar;
  border-left: 3px #ff406e;
  padding-left: 8px;
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "header header header sidebar"
    "main main main sidebar";
  /* grid-gap: 64px; */
`;
const ItemGridWrap = styled.main`
  width: 75vw;
  padding: 16px 40px;
`;
export default App;
