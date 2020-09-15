import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <NavBarWrapper>
        <Nav>
          <Link
            style={{
              textDecoration: "none",
              padding: "10px",
              fontFamily: "Titillium Web",
              fontSize: "24px",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontFamily: "Titillium Web",
              padding: "10px",
              fontSize: "24px",
            }}
            to="/items"
          >
            Cart
          </Link>
        </Nav>
      </NavBarWrapper>
      <Switch>
        <Route path="/items">
          <Items />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2></h2>;
}

function Items() {
  return <h2></h2>;
}

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Nav = styled.ul`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Navbar;
