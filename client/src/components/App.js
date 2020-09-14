import React, { useState, useEffect } from "react";

import Cart from "./Cart/index";
import Header from "./Header";
import styled from "styled-components";
import Shopping from "./Shopping";
import Featured from "./Featured";

// This is a temporary template of the page

function App() {
  // hook, but we have to change to reducer
  // // const [bacon, setBacon] = useState(null);
  // // useEffect(() => {
  // //   fetch('/bacon')
  // //     .then(res => res.json())
  // //     .then(data => setBacon(data));
  // // }, []);

  return (
    <>
      <Header />
      <Body>
        <Featured />
        <Shopping>{/* <Product /> */}</Shopping>
        <Cart />
      </Body>
    </>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: row;

  /* Temporary styles */
  border: solid 2pt black;
  min-height: 50vh;
`;

export default App;
