import React, { useState, useEffect } from "react";
import { Switch, Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemPage from "./Cart/";
import Cart from "./Cart/index";
import ErrorPage from "./Cart/ErrorPage";

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Cart setBacon={bacon ? bacon : `...where's my stuff?...`} />
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
    </Router>
  );
}

export default App;
