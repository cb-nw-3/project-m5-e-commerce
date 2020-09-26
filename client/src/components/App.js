import React from "react";

import Home from "./Home/Index";
import Header from "./Header/Index";
import Product from "./Product/Index";
import FourOhFour from "./FourOhFour";
import Footer from "./Footer/footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/notfound">
            <FourOhFour />
          </Route>
        </Switch>
        <Footer />
      </>
      <GlobalStyles />
    </Router>
  );
}

export default App;
