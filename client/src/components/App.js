import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
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
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Cart bacon={bacon ? bacon : []} />
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
}

export default App;
