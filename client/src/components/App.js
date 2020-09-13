import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemGridWrapper from "./ItemGridWrapper";

function App() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("/items")
  //     .then((response) => response.json())
  //     .then((data) => setItems(data));
  // }, []);

  return (
    <ItemGridWrapper />
    // <UL>
    //   {items.map((item) => (
    //     <li key={item._id}>{item.name}</li>
    //   ))}
    // </UL>
  );
}

// const UL = styled.ul`
//   list-style-type: none;
// `;

export default App;
