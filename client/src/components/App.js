import React from 'react';

import Home from './Home';
import Header from './Header';
import Item from './Item';

import {
  BrowserRouter as Router
  , Switch, Route
} from "react-router-dom";

//Style
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyle";

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
            <Item />
          </Route>
        </Switch>
      </>
      <GlobalStyles />
    </Router >
  )
}

export default App;
