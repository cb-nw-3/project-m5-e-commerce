import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductDetails from "./Shopping/ProductDetails";
import ErrorPage from "./ErrorPage/index";
import HomePage from "./HomePage/index";
import GlobalStyles from "./GlobalStyles";
import AboutUs from "./Header/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/AboutUs">
            <AboutUs />
          </Route>
          <Route exact path="/shop/:itemId">
            <ProductDetails />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
      <GlobalStyles />
    </BrowserRouter>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: row;

  /* Temporary styles */
  border: solid 2pt black;
  min-height: 50vh;
`;

export default App;
