import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemGridWrapper from "./ItemGridWrapper";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <ItemGridWrapper />
    </div>
  );
}

export default App;
