import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "../components/header/header";
import NavBar from "../components/header/NavBar";
import Homepage from "./homepage/Homepage";
import Cart from "../components/Cart/Cart";
import IndividualItem from "./IndividualItem";
import FourOhFour from "./errrorPage/FourOhFour";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/items/:itemId">
          <IndividualItem />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  );
}

export default App;
