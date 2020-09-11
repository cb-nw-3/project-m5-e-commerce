import React from 'react';

import Home from './Home/Index';
import Header from './Header/Index';
import Product from './Product/Index';

import {
  BrowserRouter as Router
  , Switch, Route
} from "react-router-dom";

//Style
import styled from "styled-components/macro";
import GlobalStyles from "./Style/GlobalStyle";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/item/:id">
            <Product />
          </Route>
        </Switch>
      </>
      <GlobalStyles />
    </Router >
  )
}

export default App;
