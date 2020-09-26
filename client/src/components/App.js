import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ProductDetails from "./Shopping/ProductDetails";
import HomePage from "./HomePage/index";
import GlobalStyles from "./GlobalStyles";
import AboutUs from "./AboutUs.js/index";
import Fashionspace from './Fashion/index'

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/shop/:itemId">
            <ProductDetails />
          </Route>
          <Route exact path="/fashion">
            <Fashionspace />
          </Route>
        </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
