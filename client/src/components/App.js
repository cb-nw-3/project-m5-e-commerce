import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductDetails from "./Shopping/ProductDetails";
import HomePage from "./HomePage/index";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/shop/:itemId">
            <ProductDetails />
          </Route>
          <Route exact path="/aboutus">
            {/* ABOUT US PAGE TO ADD */}
          </Route>
          <Route exact path="/fashion">
            {/* MERCH PAGE TO ADD */}
          </Route>
        </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
