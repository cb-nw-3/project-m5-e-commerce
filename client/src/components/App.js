import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemPage from "./Cart/";
import Cart from "./Cart/index";
import ErrorPage from "./Cart/ErrorPage";
import HomePage from "./HomePage/index";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/shop/:itemId">
            <ItemPage />
            <Link to="/shop/abc123">View item details</Link>;
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
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
